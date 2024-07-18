window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4860","name":"crp_resload","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"crp_resload"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-50389","object_id":"column-50389","name":"ResLoadId","name_without_path":"ResLoadId","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50390","object_id":"column-50390","name":"CapacityType","name_without_path":"CapacityType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50391","object_id":"column-50391","name":"DocType","name_without_path":"DocType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50392","object_id":"column-50392","name":"DocDId","name_without_path":"DocDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50393","object_id":"column-50393","name":"PartId","name_without_path":"PartId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50394","object_id":"column-50394","name":"WcId","name_without_path":"WcId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50395","object_id":"column-50395","name":"ResId","name_without_path":"ResId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50396","object_id":"column-50396","name":"OpSeq","name_without_path":"OpSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50397","object_id":"column-50397","name":"OpDescription","name_without_path":"OpDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50398","object_id":"column-50398","name":"UnitCode","name_without_path":"UnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50399","object_id":"column-50399","name":"WorkHour","name_without_path":"WorkHour","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_WkHr: decimal","data_length":"22, 4","is_nullable":true,"computed_formula":null,"default_value":"\r\n\r\ncreate default D_Udt_WkHr\r\n    as 0\r\n\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50400","object_id":"column-50400","name":"StartDate","name_without_path":"StartDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-50401","object_id":"column-50401","name":"EndDate","name_without_path":"EndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_crp_resloaddetail","title":null,"description":null,"is_user_defined":false,"foreign_table":"crp_resloaddetail","foreign_table_show_schema":"dbo.crp_resloaddetail","foreign_table_verbose":"crp_resloaddetail","foreign_table_verbose_show_schema":"dbo.crp_resloaddetail","foreign_table_object_id":"t4861","primary_table":"crp_resload","primary_table_show_schema":"dbo.crp_resload","primary_table_verbose":"crp_resload","primary_table_verbose_show_schema":"dbo.crp_resload","primary_table_object_id":"t4860","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ResLoadId","foreign_column_path":null,"foreign_column":"ResLoadId"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_crp_resload","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ResLoadId","name":"ResLoadId"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};