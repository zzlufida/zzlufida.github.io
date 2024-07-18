window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4449","name":"ca_QuoAll","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ca_QuoAll"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-44433","object_id":"column-44433","name":"cPPid","name_without_path":"cPPid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-44434","object_id":"column-44434","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-44435","object_id":"column-44435","name":"cAmoID","name_without_path":"cAmoID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-44436","object_id":"column-44436","name":"iQuo","name_without_path":"iQuo","description":null,"is_pk":false,"is_identity":false,"data_type":"ia_decimal: decimal","data_length":"38, 12","is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-44437","object_id":"column-44437","name":"iperiod","name_without_path":"iperiod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-44442","object_id":"column-44442","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-44438","object_id":"column-44438","name":"bChkFlag","name_without_path":"bChkFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-44439","object_id":"column-44439","name":"bOverFlag","name_without_path":"bOverFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-44440","object_id":"column-44440","name":"bFixGet","name_without_path":"bFixGet","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-44441","object_id":"column-44441","name":"bReflag","name_without_path":"bReflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK__Ca_QuoAll__307C535C","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"AutoID","name":"AutoID"}],"custom_fields":{}},{"name":"IX_CA_QuoAll","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iperiod","name":"iperiod"},{"path":null,"name_without_path":"cPPid","name":"cPPid"},{"path":null,"name_without_path":"cBatch","name":"cBatch"},{"path":null,"name_without_path":"cAmoID","name":"cAmoID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};