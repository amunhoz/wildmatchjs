use neon::prelude::*;
use neon::{declare_types, register_module};
use std::collections::HashMap;
use wildmatch::WildMatch;

pub struct WMatch {    
    pub matches: HashMap<String, WildMatch>
}

impl WMatch {
  fn insertItem(&mut self, key: &str) {
    self.matches.insert(key.to_string(), WildMatch::new(key)); 

  }
  fn findMatch(&mut self, search: &str) ->  Vec<String> {
    let mut v: Vec<String> = Vec::new();              
    for (key, wmatch) in &self.matches {
      if wmatch.is_match(search) {                   
          v.push(key.clone());
      }            
    }                 
    v
  }
}

declare_types! {
    pub class JsWMatch for WMatch {
      init(mut cx) {          
        Ok(WMatch{
            matches: HashMap::new() 
        })
      }    

      method insert(mut cx) {
        let key = cx.argument::<JsString>(0)?;
        let mut this = cx.this();
        let guard = cx.lock();   
        {
          let mut matcher = this.borrow_mut(&guard);
          matcher.insertItem(&key.value());
        }   
        Ok(JsNull::new().upcast())  
      }      
  
      method matches(mut cx){
        let search = cx.argument::<JsString>(0)?;        
        let mut this = cx.this();
        let guard = cx.lock();    
        let v = {          
          let mut matcher = this.borrow_mut(&guard);
          let vx = matcher.findMatch(&search.value());
          vx
        };              
        let result: Handle<JsArray> = JsArray::new(&mut cx, v.len() as u32); 
        for (i, obj) in v.iter().enumerate() {
          let js_string = cx.string(obj);
           result.set(&mut cx, i as u32, js_string)?;           
        }

        Ok(result.upcast())  
      }
      method panic(_) {
        panic!("User.prototype.panic")
      }
    }
  }
  
register_module!(mut m, {
    m.export_class::<JsWMatch>("WildMatch")?;
    Ok(())
});