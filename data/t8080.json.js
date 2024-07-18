window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t8080","name":"rel_voicemail_privilege","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rel_voicemail_privilege"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-115973","object_id":"column-115973","name":"p_id","name_without_path":"p_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115978","object_id":"column-115978","name":"voicemail_id","name_without_path":"voicemail_id","description":null,"is_pk":true,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115979","object_id":"column-115979","name":"privilege_type","name_without_path":"privilege_type","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115974","object_id":"column-115974","name":"privilege_id","name_without_path":"privilege_id","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115975","object_id":"column-115975","name":"is_self","name_without_path":"is_self","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115976","object_id":"column-115976","name":"server_flag","name_without_path":"server_flag","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-115977","object_id":"column-115977","name":"crm_timestamp","name_without_path":"crm_timestamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_REL_VOICEMAIL_PRIVILEGE","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"voicemail_id","name":"voicemail_id"},{"path":null,"name_without_path":"privilege_type","name":"privilege_type"},{"path":null,"name_without_path":"privilege_id","name":"privilege_id"}],"custom_fields":{}},{"name":"PK_REL_VOICEMAIL_PRIVILEGE2","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"voicemail_id","name":"voicemail_id"},{"path":null,"name_without_path":"privilege_type","name":"privilege_type"},{"path":null,"name_without_path":"privilege_id","name":"privilege_id"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};