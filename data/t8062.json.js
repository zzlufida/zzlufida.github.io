window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t8062","name":"rel_sms_account_user","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rel_sms_account_user"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-115876","object_id":"column-115876","name":"smsacc_id","name_without_path":"smsacc_id","description":null,"is_pk":true,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115877","object_id":"column-115877","name":"user_id","name_without_path":"user_id","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115878","object_id":"column-115878","name":"is_self","name_without_path":"is_self","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115879","object_id":"column-115879","name":"server_flag","name_without_path":"server_flag","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115880","object_id":"column-115880","name":"crm_timestamp","name_without_path":"crm_timestamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_REL_SMS_ACCOUNT_USER","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"smsacc_id","name":"smsacc_id"},{"path":null,"name_without_path":"user_id","name":"user_id"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};