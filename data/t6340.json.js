window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6340","name":"HR_PF_GradeManner","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR_PF_GradeManner"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-77399","object_id":"column-77399","name":"cGradeMannerCode","name_without_path":"cGradeMannerCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77400","object_id":"column-77400","name":"cGradeMannerName","name_without_path":"cGradeMannerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77401","object_id":"column-77401","name":"sType","name_without_path":"sType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77402","object_id":"column-77402","name":"fUpperlimit","name_without_path":"fUpperlimit","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 9","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77403","object_id":"column-77403","name":"fLowerlimit","name_without_path":"fLowerlimit","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 9","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77404","object_id":"column-77404","name":"cRemark","name_without_path":"cRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77405","object_id":"column-77405","name":"tStamp","name_without_path":"tStamp","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77406","object_id":"column-77406","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77407","object_id":"column-77407","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-77408","object_id":"column-77408","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"HR_PF_GradeManner_HR_PF_ForceDistributeRule_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_ForceDistributeRule","foreign_table_show_schema":"dbo.HR_PF_ForceDistributeRule","foreign_table_verbose":"HR_PF_ForceDistributeRule","foreign_table_verbose_show_schema":"dbo.HR_PF_ForceDistributeRule","foreign_table_object_id":"t6325","primary_table":"HR_PF_GradeManner","primary_table_show_schema":"dbo.HR_PF_GradeManner","primary_table_verbose":"HR_PF_GradeManner","primary_table_verbose_show_schema":"dbo.HR_PF_GradeManner","primary_table_object_id":"t6340","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cGradeMannerCode","foreign_column_path":null,"foreign_column":"cGradeMannerCode"}],"custom_fields":{}},{"name":"HR_PF_GradeManner_HR_PF_GradeMannerRating_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_GradeMannerRating","foreign_table_show_schema":"dbo.HR_PF_GradeMannerRating","foreign_table_verbose":"HR_PF_GradeMannerRating","foreign_table_verbose_show_schema":"dbo.HR_PF_GradeMannerRating","foreign_table_object_id":"t6341","primary_table":"HR_PF_GradeManner","primary_table_show_schema":"dbo.HR_PF_GradeManner","primary_table_verbose":"HR_PF_GradeManner","primary_table_verbose_show_schema":"dbo.HR_PF_GradeManner","primary_table_object_id":"t6340","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cGradeMannerCode","foreign_column_path":null,"foreign_column":"cGradeMannerCode"}],"custom_fields":{}},{"name":"HR_PF_GradeManner_HR_PF_SchemaTarget_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"HR_PF_SchemaTarget","foreign_table_show_schema":"dbo.HR_PF_SchemaTarget","foreign_table_verbose":"HR_PF_SchemaTarget","foreign_table_verbose_show_schema":"dbo.HR_PF_SchemaTarget","foreign_table_object_id":"t6391","primary_table":"HR_PF_GradeManner","primary_table_show_schema":"dbo.HR_PF_GradeManner","primary_table_verbose":"HR_PF_GradeManner","primary_table_verbose_show_schema":"dbo.HR_PF_GradeManner","primary_table_object_id":"t6340","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cGradeMannerCode","foreign_column_path":null,"foreign_column":"cGradeMannerCode"}],"custom_fields":{}}],"unique_keys":[{"name":"评分方式_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cGradeMannerCode","name":"cGradeMannerCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};