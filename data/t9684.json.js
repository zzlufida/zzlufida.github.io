window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9684","name":"WA_GZItem","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"WA_GZItem"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-155172","object_id":"column-155172","name":"cGZGradeNum","name_without_path":"cGZGradeNum","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-155173","object_id":"column-155173","name":"iGZItem_id","name_without_path":"iGZItem_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.WA_GZItem_iGZItem_id_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9693","name":"WA_GZtblset","name_show_schema":"dbo.WA_GZtblset"}]},{"id":"column-155174","object_id":"column-155174","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.WA_GZItem_iOrder_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-155175","object_id":"column-155175","name":"cHrItemCode","name_without_path":"cHrItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-155176","object_id":"column-155176","name":"iYear","name_without_path":"iYear","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK__WA_GZItem__iGZIt__71B2B7D7","title":null,"description":null,"is_user_defined":false,"foreign_table":"WA_GZItem","foreign_table_show_schema":"dbo.WA_GZItem","foreign_table_verbose":"WA_GZItem","foreign_table_verbose_show_schema":"dbo.WA_GZItem","foreign_table_object_id":"t9684","primary_table":"WA_GZtblset","primary_table_show_schema":"dbo.WA_GZtblset","primary_table_verbose":"WA_GZtblset","primary_table_verbose_show_schema":"dbo.WA_GZtblset","primary_table_object_id":"t9693","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"iGZItem_id","foreign_column_path":null,"foreign_column":"iGZItem_id"}],"custom_fields":{}}],"unique_keys":[{"name":"aaaaaWA_GZItem_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cGZGradeNum","name":"cGZGradeNum"},{"path":null,"name_without_path":"iYear","name":"iYear"},{"path":null,"name_without_path":"iOrder","name":"iOrder"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};