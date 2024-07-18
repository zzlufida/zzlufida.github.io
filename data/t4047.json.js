window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4047","name":"BG_FunctionConsult","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_FunctionConsult"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40111","object_id":"column-40111","name":"cFLID","name_without_path":"cFLID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40112","object_id":"column-40112","name":"cFuncName","name_without_path":"cFuncName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40113","object_id":"column-40113","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40114","object_id":"column-40114","name":"cParmName","name_without_path":"cParmName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40115","object_id":"column-40115","name":"iConsultType","name_without_path":"iConsultType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40116","object_id":"column-40116","name":"cConsultKey","name_without_path":"cConsultKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40117","object_id":"column-40117","name":"cSupParmName","name_without_path":"cSupParmName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40118","object_id":"column-40118","name":"cKeyName","name_without_path":"cKeyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40119","object_id":"column-40119","name":"cDefaultValue","name_without_path":"cDefaultValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40120","object_id":"column-40120","name":"bEdit","name_without_path":"bEdit","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40121","object_id":"column-40121","name":"bGetName","name_without_path":"bGetName","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40122","object_id":"column-40122","name":"bEnd","name_without_path":"bEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-40123","object_id":"column-40123","name":"iMakeYear","name_without_path":"iMakeYear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_Bg_FunctionConsult","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cFLID","name":"cFLID"}],"custom_fields":{}},{"name":"IX_Bg_FunctionConsult","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iMakeYear","name":"iMakeYear"},{"path":null,"name_without_path":"cFuncName","name":"cFuncName"},{"path":null,"name_without_path":"cParmName","name":"cParmName"}],"custom_fields":{}},{"name":"IX_Bg_FunctionConsult_1","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cFuncName","name":"cFuncName"},{"path":null,"name_without_path":"iOrder","name":"iOrder"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};