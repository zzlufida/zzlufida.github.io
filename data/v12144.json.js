window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12144","name":"rp_bank","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view rp_bank as\r\nselect CBName,min(cBankCode) as cBankCode from Bank group by CBName,cBankCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rp_bank"},{"field":"Type","value":"View"}],"columns":[{"id":"column-281352","object_id":"column-281352","name":"CBName","name_without_path":"CBName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281353","object_id":"column-281353","name":"cBankCode","name_without_path":"cBankCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};