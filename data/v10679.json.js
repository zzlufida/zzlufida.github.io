window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10679","name":"ex_v_incoterms_demo","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view dbo.ex_v_incoterms_demo\r\nas\r\nselect dbo.ex_incoterms_demo.cincotermcode,dbo.ex_incoterms_demo.cincotermremark, dbo.ex_incoterms_demo.cstartused,dbo.ex_incoterms_demo.cdefault\r\nfrom dbo.ex_incoterms_demo","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ex_v_incoterms_demo"},{"field":"Type","value":"View"}],"columns":[{"id":"column-201581","object_id":"column-201581","name":"cincotermcode","name_without_path":"cincotermcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-201582","object_id":"column-201582","name":"cincotermremark","name_without_path":"cincotermremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-201583","object_id":"column-201583","name":"cstartused","name_without_path":"cstartused","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-201584","object_id":"column-201584","name":"cdefault","name_without_path":"cdefault","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};