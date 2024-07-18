window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6282","name":"HR_PF_Dimensionality","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_Dimensionality"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-76951","object_id":"column-76951","name":"cDimensionalityCode","name_without_path":"cDimensionalityCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-76952","object_id":"column-76952","name":"cDimensionalityName","name_without_path":"cDimensionalityName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-76953","object_id":"column-76953","name":"sRelationToCheckperson","name_without_path":"sRelationToCheckperson","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-76954","object_id":"column-76954","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-76955","object_id":"column-76955","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-76956","object_id":"column-76956","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-76957","object_id":"column-76957","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"HR_PF_Dimensionality_HR_PF_ActionPlanData_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_ActionPlanData","foreign_table_show_schema":"dbo.HR_PF_ActionPlanData","foreign_table_verbose":"HR_PF_ActionPlanData","foreign_table_verbose_show_schema":"dbo.HR_PF_ActionPlanData","foreign_table_object_id":"t6267","primary_table":"HR_PF_Dimensionality","primary_table_show_schema":"dbo.HR_PF_Dimensionality","primary_table_verbose":"HR_PF_Dimensionality","primary_table_verbose_show_schema":"dbo.HR_PF_Dimensionality","primary_table_object_id":"t6282","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDimensionalityCode","foreign_column_path":null,"foreign_column":"cDimensionalityCode"}],"custom_fields":{}},{"name":"HR_PF_Dimensionality_HR_PF_AuthSchemaDistributeTable_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_AuthSchemaDistributeTable","foreign_table_show_schema":"dbo.HR_PF_AuthSchemaDistributeTable","foreign_table_verbose":"HR_PF_AuthSchemaDistributeTable","foreign_table_verbose_show_schema":"dbo.HR_PF_AuthSchemaDistributeTable","foreign_table_object_id":"t6273","primary_table":"HR_PF_Dimensionality","primary_table_show_schema":"dbo.HR_PF_Dimensionality","primary_table_verbose":"HR_PF_Dimensionality","primary_table_verbose_show_schema":"dbo.HR_PF_Dimensionality","primary_table_object_id":"t6282","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDimensionalityCode","foreign_column_path":null,"foreign_column":"cDimensionalityCode"}],"custom_fields":{}},{"name":"HR_PF_Dimensionality_HR_PF_AuthSchemaDistributeTable_FK2","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_AuthSchemaDistributeTable","foreign_table_show_schema":"dbo.HR_PF_AuthSchemaDistributeTable","foreign_table_verbose":"HR_PF_AuthSchemaDistributeTable","foreign_table_verbose_show_schema":"dbo.HR_PF_AuthSchemaDistributeTable","foreign_table_object_id":"t6273","primary_table":"HR_PF_Dimensionality","primary_table_show_schema":"dbo.HR_PF_Dimensionality","primary_table_verbose":"HR_PF_Dimensionality","primary_table_verbose_show_schema":"dbo.HR_PF_Dimensionality","primary_table_object_id":"t6282","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDimensionalityCode","foreign_column_path":null,"foreign_column":"cAuthDimensionalityCode"}],"custom_fields":{}},{"name":"HR_PF_Dimensionality_HR_PF_PlanWorkFlowDimensionality_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_PlanWorkFlowDimensionality","foreign_table_show_schema":"dbo.HR_PF_PlanWorkFlowDimensionality","foreign_table_verbose":"HR_PF_PlanWorkFlowDimensionality","foreign_table_verbose_show_schema":"dbo.HR_PF_PlanWorkFlowDimensionality","foreign_table_object_id":"t6369","primary_table":"HR_PF_Dimensionality","primary_table_show_schema":"dbo.HR_PF_Dimensionality","primary_table_verbose":"HR_PF_Dimensionality","primary_table_verbose_show_schema":"dbo.HR_PF_Dimensionality","primary_table_object_id":"t6282","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDimensionalityCode","foreign_column_path":null,"foreign_column":"cDimensionalityCode"}],"custom_fields":{}},{"name":"HR_PF_Dimensionality_HR_PF_SchemaDimensionality_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaDimensionality","foreign_table_show_schema":"dbo.HR_PF_SchemaDimensionality","foreign_table_verbose":"HR_PF_SchemaDimensionality","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaDimensionality","foreign_table_object_id":"t6386","primary_table":"HR_PF_Dimensionality","primary_table_show_schema":"dbo.HR_PF_Dimensionality","primary_table_verbose":"HR_PF_Dimensionality","primary_table_verbose_show_schema":"dbo.HR_PF_Dimensionality","primary_table_object_id":"t6282","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDimensionalityCode","foreign_column_path":null,"foreign_column":"cDimensionalityCode"}],"custom_fields":{}},{"name":"HR_PF_Dimensionality_HR_PF_TableTargetDimensionality_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_TableTargetDimensionality","foreign_table_show_schema":"dbo.HR_PF_TableTargetDimensionality","foreign_table_verbose":"HR_PF_TableTargetDimensionality","foreign_table_verbose_show_schema":"dbo.HR_PF_TableTargetDimensionality","foreign_table_object_id":"t6400","primary_table":"HR_PF_Dimensionality","primary_table_show_schema":"dbo.HR_PF_Dimensionality","primary_table_verbose":"HR_PF_Dimensionality","primary_table_verbose_show_schema":"dbo.HR_PF_Dimensionality","primary_table_object_id":"t6282","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDimensionalityCode","foreign_column_path":null,"foreign_column":"cDimensionalityCode"}],"custom_fields":{}}],"unique_keys":[{"name":"维度_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cDimensionalityCode","name":"cDimensionalityCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};