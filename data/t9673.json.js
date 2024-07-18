window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9673","name":"WA_GZBItemGrd","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"WA_GZBItemGrd"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-154948","object_id":"column-154948","name":"cGZGradeNum","name_without_path":"cGZGradeNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9675","name":"WA_GZBName","name_show_schema":"dbo.WA_GZBName"}]},{"id":"column-154949","object_id":"column-154949","name":"iGZBName_id","name_without_path":"iGZBName_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.WA_GZBItemGrd_iGZBName_id_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9675","name":"WA_GZBName","name_show_schema":"dbo.WA_GZBName"}]},{"id":"column-154950","object_id":"column-154950","name":"iPsnGrd_id","name_without_path":"iPsnGrd_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.WA_GZBItemGrd_iPsnGrd_id_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-154951","object_id":"column-154951","name":"cMachine","name_without_path":"cMachine","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-154952","object_id":"column-154952","name":"id","name_without_path":"id","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-154953","object_id":"column-154953","name":"iYear","name_without_path":"iYear","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9675","name":"WA_GZBName","name_show_schema":"dbo.WA_GZBName"}]}],"relations":[{"name":"FK__WA_GZBItemGrd__6DE226F3","title":null,"description":null,"is_user_defined":false,"foreign_table":"WA_GZBItemGrd","foreign_table_show_schema":"dbo.WA_GZBItemGrd","foreign_table_verbose":"WA_GZBItemGrd","foreign_table_verbose_show_schema":"dbo.WA_GZBItemGrd","foreign_table_object_id":"t9673","primary_table":"WA_GZBName","primary_table_show_schema":"dbo.WA_GZBName","primary_table_verbose":"WA_GZBName","primary_table_verbose_show_schema":"dbo.WA_GZBName","primary_table_object_id":"t9675","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cGZGradeNum","foreign_column_path":null,"foreign_column":"cGZGradeNum"},{"primary_column_path":null,"primary_column":"iGZBName_id","foreign_column_path":null,"foreign_column":"iGZBName_id"},{"primary_column_path":null,"primary_column":"iYear","foreign_column_path":null,"foreign_column":"iYear"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_WA_GZBItemGrd","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};