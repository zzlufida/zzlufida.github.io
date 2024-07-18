window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10860","name":"GL_V_CodeClass","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW GL_V_CodeClass\r\nAS\r\nselect cclass,cclass_engl,cclass_engl as ccode,cclass as ccode_name,left(min(ccode),1) as iorder \r\nfrom code\r\ngroup by cclass,cclass_engl\r\nunion\r\nselect cclass,cclass_engl,cclass_engl+ccode as ccode,ccode_name,left(ccode,1) as iorder \r\nfrom code","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GL_V_CodeClass"},{"field":"Type","value":"View"}],"columns":[{"id":"column-207452","object_id":"column-207452","name":"cclass","name_without_path":"cclass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"14","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207453","object_id":"column-207453","name":"cclass_engl","name_without_path":"cclass_engl","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207454","object_id":"column-207454","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207455","object_id":"column-207455","name":"ccode_name","name_without_path":"ccode_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-207456","object_id":"column-207456","name":"iorder","name_without_path":"iorder","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};