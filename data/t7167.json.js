window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7167","name":"NE_ExpenseStandardDept","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_ExpenseStandardDept"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-96489","object_id":"column-96489","name":"ID","name_without_path":"ID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-96490","object_id":"column-96490","name":"ExpenseStandardID","name_without_path":"ExpenseStandardID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-96491","object_id":"column-96491","name":"DeptID","name_without_path":"DeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-96492","object_id":"column-96492","name":"ts","name_without_path":"ts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"NE_ExpenseStandardDept_ID_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ID","name":"ID"}],"custom_fields":{}},{"name":"NE_ExpenseStandardDept_IX","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ExpenseStandardID","name":"ExpenseStandardID"},{"path":null,"name_without_path":"DeptID","name":"DeptID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};