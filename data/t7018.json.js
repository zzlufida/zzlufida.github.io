window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7018","name":"MOMSrvReg","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"MOMSrvReg"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-93721","object_id":"column-93721","name":"ID","name_without_path":"ID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93722","object_id":"column-93722","name":"MOMEntityName","name_without_path":"MOMEntityName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93723","object_id":"column-93723","name":"PubKey","name_without_path":"PubKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"512","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93724","object_id":"column-93724","name":"ExtendInfos","name_without_path":"ExtendInfos","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-93725","object_id":"column-93725","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_MOMCLUST_REFERENCE_MOMSRVRE","title":null,"description":null,"is_user_defined":false,"foreign_table":"MOMClusterSrvReg","foreign_table_show_schema":"dbo.MOMClusterSrvReg","foreign_table_verbose":"MOMClusterSrvReg","foreign_table_verbose_show_schema":"dbo.MOMClusterSrvReg","foreign_table_object_id":"t7017","primary_table":"MOMSrvReg","primary_table_show_schema":"dbo.MOMSrvReg","primary_table_verbose":"MOMSrvReg","primary_table_verbose_show_schema":"dbo.MOMSrvReg","primary_table_object_id":"t7018","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ID","foreign_column_path":null,"foreign_column":"MOMEntityID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_MOMSrvReg","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ID","name":"ID"}],"custom_fields":{}},{"name":"Uq_MOMEntityName","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"MOMEntityName","name":"MOMEntityName"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};