window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13040","name":"v_ex_orderdatefield","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ex_orderdatefield as \r\nselect \r\ncfieldcode ,cfieldname \r\nfrom ex_orderdatefield where ex_orderdatefield.langid=@@langid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_orderdatefield"},{"field":"Type","value":"View"}],"columns":[{"id":"column-342104","object_id":"column-342104","name":"cfieldcode","name_without_path":"cfieldcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-342105","object_id":"column-342105","name":"cfieldname","name_without_path":"cfieldname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};