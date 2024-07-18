window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4879","name":"CustomerClass","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CustomerClass"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-51265","object_id":"column-51265","name":"cCCCode","name_without_path":"cCCCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-51266","object_id":"column-51266","name":"cCCName","name_without_path":"cCCName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-51267","object_id":"column-51267","name":"iCCGrade","name_without_path":"iCCGrade","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.CustomerClass_iCCGrade_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-51268","object_id":"column-51268","name":"bCCEnd","name_without_path":"bCCEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.CustomerClass_bCCEnd_D AS 1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-51269","object_id":"column-51269","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK__Customer__cCCCod__15660868","title":null,"description":null,"is_user_defined":false,"foreign_table":"Customer","foreign_table_show_schema":"dbo.Customer","foreign_table_verbose":"Customer","foreign_table_verbose_show_schema":"dbo.Customer","foreign_table_object_id":"t4871","primary_table":"CustomerClass","primary_table_show_schema":"dbo.CustomerClass","primary_table_verbose":"CustomerClass","primary_table_verbose_show_schema":"dbo.CustomerClass","primary_table_object_id":"t4879","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cCCCode","foreign_column_path":null,"foreign_column":"cCCCode"}],"custom_fields":{}},{"name":"FK__customer_import__cCCCod__15660868","title":null,"description":null,"is_user_defined":false,"foreign_table":"customer_import","foreign_table_show_schema":"dbo.customer_import","foreign_table_verbose":"customer_import","foreign_table_verbose_show_schema":"dbo.customer_import","foreign_table_object_id":"t4875","primary_table":"CustomerClass","primary_table_show_schema":"dbo.CustomerClass","primary_table_verbose":"CustomerClass","primary_table_verbose_show_schema":"dbo.CustomerClass","primary_table_object_id":"t4879","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cCCCode","foreign_column_path":null,"foreign_column":"cCCCode"}],"custom_fields":{}},{"name":"SaClassDisRate_cCusCCode","title":null,"description":null,"is_user_defined":false,"foreign_table":"SA_ClassDisRate","foreign_table_show_schema":"dbo.SA_ClassDisRate","foreign_table_verbose":"SA_ClassDisRate","foreign_table_verbose_show_schema":"dbo.SA_ClassDisRate","foreign_table_object_id":"t8142","primary_table":"CustomerClass","primary_table_show_schema":"dbo.CustomerClass","primary_table_verbose":"CustomerClass","primary_table_verbose_show_schema":"dbo.CustomerClass","primary_table_object_id":"t4879","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cCCCode","foreign_column_path":null,"foreign_column":"cCusCCode"}],"custom_fields":{}},{"name":"sa_cuspricejustdetail_Customerclass","title":null,"description":null,"is_user_defined":false,"foreign_table":"SA_CusPriceJustDetail","foreign_table_show_schema":"dbo.SA_CusPriceJustDetail","foreign_table_verbose":"SA_CusPriceJustDetail","foreign_table_verbose_show_schema":"dbo.SA_CusPriceJustDetail","foreign_table_object_id":"t8149","primary_table":"CustomerClass","primary_table_show_schema":"dbo.CustomerClass","primary_table_verbose":"CustomerClass","primary_table_verbose_show_schema":"dbo.CustomerClass","primary_table_object_id":"t4879","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cCCCode","foreign_column_path":null,"foreign_column":"ccusccode"}],"custom_fields":{}},{"name":"SaCusUPrice_Customerclass","title":null,"description":null,"is_user_defined":false,"foreign_table":"SA_CusUPrice","foreign_table_show_schema":"dbo.SA_CusUPrice","foreign_table_verbose":"SA_CusUPrice","foreign_table_verbose_show_schema":"dbo.SA_CusUPrice","foreign_table_object_id":"t8155","primary_table":"CustomerClass","primary_table_show_schema":"dbo.CustomerClass","primary_table_verbose":"CustomerClass","primary_table_verbose_show_schema":"dbo.CustomerClass","primary_table_object_id":"t4879","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cCCCode","foreign_column_path":null,"foreign_column":"cCusCCode"}],"custom_fields":{}}],"unique_keys":[{"name":"aaaaaCustomerClass_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cCCCode","name":"cCCCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};