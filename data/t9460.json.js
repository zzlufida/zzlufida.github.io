window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9460","name":"UFSUB_dsign","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UFSUB_dsign"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-151880","object_id":"column-151880","name":"i_id","name_without_path":"i_id","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-151881","object_id":"column-151881","name":"csign","name_without_path":"csign","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-151882","object_id":"column-151882","name":"isignseq","name_without_path":"isignseq","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-151883","object_id":"column-151883","name":"ctext","name_without_path":"ctext","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-151884","object_id":"column-151884","name":"itype","name_without_path":"itype","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.UFSUB_dsign_itype_D AS 0\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-151885","object_id":"column-151885","name":"iotherused","name_without_path":"iotherused","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.UFSUB_dsign_iotherused_D AS 0\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"aaaaaUFSUB_dsign_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"csign","name":"csign"}],"custom_fields":{}},{"name":"ctext","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ctext","name":"ctext"}],"custom_fields":{}},{"name":"i_id","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"i_id","name":"i_id"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};