window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10699","name":"ex_v_trademode_demo","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view dbo.ex_v_trademode_demo\r\nas\r\nselect dbo.ex_trademode_demo.ctmcode,dbo.ex_trademode_demo.ctmname,dbo.ex_trademode_demo.cbustype,dbo.ex_trademode_demo.cstname,dbo.ex_trademode_demo.cprocessmode,dbo.ex_trademode_demo.ctmremark,dbo.ex_trademode_demo.cdefault\r\nfrom dbo.ex_trademode_demo","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ex_v_trademode_demo"},{"field":"Type","value":"View"}],"columns":[{"id":"column-202333","object_id":"column-202333","name":"ctmcode","name_without_path":"ctmcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202334","object_id":"column-202334","name":"ctmname","name_without_path":"ctmname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202335","object_id":"column-202335","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202336","object_id":"column-202336","name":"cstname","name_without_path":"cstname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202337","object_id":"column-202337","name":"cprocessmode","name_without_path":"cprocessmode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202338","object_id":"column-202338","name":"ctmremark","name_without_path":"ctmremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-202339","object_id":"column-202339","name":"cdefault","name_without_path":"cdefault","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};