window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4920","name":"DistrictClass","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"DistrictClass"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-52424","object_id":"column-52424","name":"cDCCode","name_without_path":"cDCCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52425","object_id":"column-52425","name":"cDCName","name_without_path":"cDCName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52426","object_id":"column-52426","name":"iDCGrade","name_without_path":"iDCGrade","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.DistrictClass_iDCGrade_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52427","object_id":"column-52427","name":"bDCEnd","name_without_path":"bDCEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.DistrictClass_bDCEnd_D AS 1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-52428","object_id":"column-52428","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK__Customer__cDCCod__47F18835","title":null,"description":null,"is_user_defined":false,"foreign_table":"Customer","foreign_table_show_schema":"dbo.Customer","foreign_table_verbose":"Customer","foreign_table_verbose_show_schema":"dbo.Customer","foreign_table_object_id":"t4871","primary_table":"DistrictClass","primary_table_show_schema":"dbo.DistrictClass","primary_table_verbose":"DistrictClass","primary_table_verbose_show_schema":"dbo.DistrictClass","primary_table_object_id":"t4920","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDCCode","foreign_column_path":null,"foreign_column":"cDCCode"}],"custom_fields":{}},{"name":"FK__customer_import__cDCCod__47F18835","title":null,"description":null,"is_user_defined":false,"foreign_table":"customer_import","foreign_table_show_schema":"dbo.customer_import","foreign_table_verbose":"customer_import","foreign_table_verbose_show_schema":"dbo.customer_import","foreign_table_object_id":"t4875","primary_table":"DistrictClass","primary_table_show_schema":"dbo.DistrictClass","primary_table_verbose":"DistrictClass","primary_table_verbose_show_schema":"dbo.DistrictClass","primary_table_object_id":"t4920","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDCCode","foreign_column_path":null,"foreign_column":"cDCCode"}],"custom_fields":{}},{"name":"FK__Vendor__cDCCode__48E5AC6E","title":null,"description":null,"is_user_defined":false,"foreign_table":"Vendor","foreign_table_show_schema":"dbo.Vendor","foreign_table_verbose":"Vendor","foreign_table_verbose_show_schema":"dbo.Vendor","foreign_table_object_id":"t9561","primary_table":"DistrictClass","primary_table_show_schema":"dbo.DistrictClass","primary_table_verbose":"DistrictClass","primary_table_verbose_show_schema":"dbo.DistrictClass","primary_table_object_id":"t4920","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDCCode","foreign_column_path":null,"foreign_column":"cDCCode"}],"custom_fields":{}}],"unique_keys":[{"name":"aaaaaDistrictClass_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cDCCode","name":"cDCCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};