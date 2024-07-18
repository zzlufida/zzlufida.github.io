window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6557","name":"hr_tm_RestDay","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_tm_RestDay"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-81186","object_id":"column-81186","name":"uRecordId","name_without_path":"uRecordId","description":null,"is_pk":true,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"create default D_UFUID\r\n    as newid()\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81187","object_id":"column-81187","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6558","name":"hr_tm_RestType","name_show_schema":"dbo.hr_tm_RestType"}]},{"id":"column-81188","object_id":"column-81188","name":"dRestDate","name_without_path":"dRestDate","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":"create default D_UFDate\r\n    as ''\r\n","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81189","object_id":"column-81189","name":"vRestName","name_without_path":"vRestName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81190","object_id":"column-81190","name":"rDateProperty","name_without_path":"rDateProperty","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-81191","object_id":"column-81191","name":"vMemo","name_without_path":"vMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_HR_TM_XXR","title":null,"description":null,"is_user_defined":false,"foreign_table":"hr_tm_RestDay","foreign_table_show_schema":"dbo.hr_tm_RestDay","foreign_table_verbose":"hr_tm_RestDay","foreign_table_verbose_show_schema":"dbo.hr_tm_RestDay","foreign_table_object_id":"t6557","primary_table":"hr_tm_RestType","primary_table_show_schema":"dbo.hr_tm_RestType","primary_table_verbose":"hr_tm_RestType","primary_table_verbose_show_schema":"dbo.hr_tm_RestType","primary_table_object_id":"t6558","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cCode","foreign_column_path":null,"foreign_column":"cCode"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_HR_TM_RESTDAY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uRecordId","name":"uRecordId"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};