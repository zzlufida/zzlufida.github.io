window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4861","name":"crp_resloaddetail","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"crp_resloaddetail"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-50402","object_id":"column-50402","name":"ResLoadId","name_without_path":"ResLoadId","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4860","name":"crp_resload","name_show_schema":"dbo.crp_resload"}]},{"id":"column-50403","object_id":"column-50403","name":"WorkDate","name_without_path":"WorkDate","description":null,"is_pk":true,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50404","object_id":"column-50404","name":"WorkHour","name_without_path":"WorkHour","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_WkHr: decimal","data_length":"22, 4","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_WkHr\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_crp_resloaddetail","title":null,"description":null,"is_user_defined":false,"foreign_table":"crp_resloaddetail","foreign_table_show_schema":"dbo.crp_resloaddetail","foreign_table_verbose":"crp_resloaddetail","foreign_table_verbose_show_schema":"dbo.crp_resloaddetail","foreign_table_object_id":"t4861","primary_table":"crp_resload","primary_table_show_schema":"dbo.crp_resload","primary_table_verbose":"crp_resload","primary_table_verbose_show_schema":"dbo.crp_resload","primary_table_object_id":"t4860","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ResLoadId","foreign_column_path":null,"foreign_column":"ResLoadId"}],"custom_fields":{}}],"unique_keys":[{"name":"pk_crp_resloaddetail","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ResLoadId","name":"ResLoadId"},{"path":null,"name_without_path":"WorkDate","name":"WorkDate"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};