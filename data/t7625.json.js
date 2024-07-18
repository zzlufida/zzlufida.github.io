window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7625","name":"PrintPolicy_VCH","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PrintPolicy_VCH"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-105185","object_id":"column-105185","name":"PolicyID","name_without_path":"PolicyID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-105186","object_id":"column-105186","name":"lastPrintTime","name_without_path":"lastPrintTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"getdate()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-105187","object_id":"column-105187","name":"VchID","name_without_path":"VchID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-105189","object_id":"column-105189","name":"VchUniqueID","name_without_path":"VchUniqueID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-105188","object_id":"column-105188","name":"Total","name_without_path":"Total","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK_PrintPolicy_VCH","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PolicyID","name":"PolicyID"},{"path":null,"name_without_path":"VchID","name":"VchID"},{"path":null,"name_without_path":"VchUniqueID","name":"VchUniqueID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};