window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9258","name":"UA_MouldClass","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UA_MouldClass"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-148834","object_id":"column-148834","name":"ID","name_without_path":"ID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-148830","object_id":"column-148830","name":"Caption","name_without_path":"Caption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-148831","object_id":"column-148831","name":"FatherID","name_without_path":"FatherID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-148832","object_id":"column-148832","name":"KeyValue","name_without_path":"KeyValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-148833","object_id":"column-148833","name":"iLevel","name_without_path":"iLevel","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_UA_Mould_UA_MouldClass","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_Mould","foreign_table_show_schema":"dbo.UA_Mould","foreign_table_verbose":"UA_Mould","foreign_table_verbose_show_schema":"dbo.UA_Mould","foreign_table_object_id":"t9257","primary_table":"UA_MouldClass","primary_table_show_schema":"dbo.UA_MouldClass","primary_table_verbose":"UA_MouldClass","primary_table_verbose_show_schema":"dbo.UA_MouldClass","primary_table_object_id":"t9258","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ID","foreign_column_path":null,"foreign_column":"MID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_UA_MouldClass","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ID","name":"ID"}],"custom_fields":{}},{"name":"IX_UA_MouldClass","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ID","name":"ID"}],"custom_fields":{}},{"name":"IX_UA_MouldClass_1","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"KeyValue","name":"KeyValue"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};