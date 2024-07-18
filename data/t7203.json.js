window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7203","name":"NE_PzSet_OP","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_PzSet_OP"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-97760","object_id":"column-97760","name":"GUID","name_without_path":"GUID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-97761","object_id":"column-97761","name":"strOperatType","name_without_path":"strOperatType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-97762","object_id":"column-97762","name":"strBalanceType","name_without_path":"strBalanceType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-97763","object_id":"column-97763","name":"strBankID","name_without_path":"strBankID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-97764","object_id":"column-97764","name":"strCurrency","name_without_path":"strCurrency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-97765","object_id":"column-97765","name":"strSubject","name_without_path":"strSubject","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-97766","object_id":"column-97766","name":"ts","name_without_path":"ts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_NE_PzSet_OP","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"GUID","name":"GUID"}],"custom_fields":{}},{"name":"IX_NE_PzSet_OP","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"strOperatType","name":"strOperatType"},{"path":null,"name_without_path":"strBankID","name":"strBankID"},{"path":null,"name_without_path":"strBalanceType","name":"strBalanceType"},{"path":null,"name_without_path":"strCurrency","name":"strCurrency"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};