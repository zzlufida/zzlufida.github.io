window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6358","name":"HR_PF_PersonTableStructure","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_PersonTableStructure"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-77641","object_id":"column-77641","name":"uPersonTableStructurePK","name_without_path":"uPersonTableStructurePK","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77629","object_id":"column-77629","name":"cSchemaCode","name_without_path":"cSchemaCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6382","name":"HR_PF_Schema","name_show_schema":"dbo.HR_PF_Schema"}]},{"id":"column-77630","object_id":"column-77630","name":"cTargetCode","name_without_path":"cTargetCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6401","name":"HR_PF_Target","name_show_schema":"dbo.HR_PF_Target"}]},{"id":"column-77631","object_id":"column-77631","name":"cColumnCode","name_without_path":"cColumnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6280","name":"HR_PF_Column","name_show_schema":"dbo.HR_PF_Column"}]},{"id":"column-77632","object_id":"column-77632","name":"sPeriodType","name_without_path":"sPeriodType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77633","object_id":"column-77633","name":"cPeriodValue","name_without_path":"cPeriodValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6357","name":"HR_PF_Period","name_show_schema":"dbo.HR_PF_Period"}]},{"id":"column-77634","object_id":"column-77634","name":"iXPlace","name_without_path":"iXPlace","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77635","object_id":"column-77635","name":"iYPlace","name_without_path":"iYPlace","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77636","object_id":"column-77636","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77637","object_id":"column-77637","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77638","object_id":"column-77638","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77639","object_id":"column-77639","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77640","object_id":"column-77640","name":"cTableCode","name_without_path":"cTableCode","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6393","name":"HR_PF_Table","name_show_schema":"dbo.HR_PF_Table"}]}],"relations":[{"name":"HR_PF_PersonTableStructure_HR_PF_PersonTableStructure_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_PersonTableStructure","foreign_table_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_verbose":"HR_PF_PersonTableStructure","foreign_table_verbose_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_object_id":"t6358","primary_table":"HR_PF_Column","primary_table_show_schema":"dbo.HR_PF_Column","primary_table_verbose":"HR_PF_Column","primary_table_verbose_show_schema":"dbo.HR_PF_Column","primary_table_object_id":"t6280","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cColumnCode","foreign_column_path":null,"foreign_column":"cColumnCode"}],"custom_fields":{}},{"name":"HR_PF_Period_HR_PF_PersonTableStructure_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_PersonTableStructure","foreign_table_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_verbose":"HR_PF_PersonTableStructure","foreign_table_verbose_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_object_id":"t6358","primary_table":"HR_PF_Period","primary_table_show_schema":"dbo.HR_PF_Period","primary_table_verbose":"HR_PF_Period","primary_table_verbose_show_schema":"dbo.HR_PF_Period","primary_table_object_id":"t6357","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPeriodValue","foreign_column_path":null,"foreign_column":"cPeriodValue"}],"custom_fields":{}},{"name":"HR_PF_Schema_HR_PF_PersonTableStructure_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_PersonTableStructure","foreign_table_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_verbose":"HR_PF_PersonTableStructure","foreign_table_verbose_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_object_id":"t6358","primary_table":"HR_PF_Schema","primary_table_show_schema":"dbo.HR_PF_Schema","primary_table_verbose":"HR_PF_Schema","primary_table_verbose_show_schema":"dbo.HR_PF_Schema","primary_table_object_id":"t6382","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cSchemaCode","foreign_column_path":null,"foreign_column":"cSchemaCode"}],"custom_fields":{}},{"name":"HR_PF_Table_HR_PF_PersonTableStructure_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_PersonTableStructure","foreign_table_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_verbose":"HR_PF_PersonTableStructure","foreign_table_verbose_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_object_id":"t6358","primary_table":"HR_PF_Table","primary_table_show_schema":"dbo.HR_PF_Table","primary_table_verbose":"HR_PF_Table","primary_table_verbose_show_schema":"dbo.HR_PF_Table","primary_table_object_id":"t6393","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cTableCode","foreign_column_path":null,"foreign_column":"cTableCode"}],"custom_fields":{}},{"name":"HR_PF_Target_HR_PF_PersonTableStructure_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_PersonTableStructure","foreign_table_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_verbose":"HR_PF_PersonTableStructure","foreign_table_verbose_show_schema":"dbo.HR_PF_PersonTableStructure","foreign_table_object_id":"t6358","primary_table":"HR_PF_Target","primary_table_show_schema":"dbo.HR_PF_Target","primary_table_verbose":"HR_PF_Target","primary_table_verbose_show_schema":"dbo.HR_PF_Target","primary_table_object_id":"t6401","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cTargetCode","foreign_column_path":null,"foreign_column":"cTargetCode"}],"custom_fields":{}}],"unique_keys":[{"name":"人员量表构成_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uPersonTableStructurePK","name":"uPersonTableStructurePK"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};