window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4033","name":"BG_FormData","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_FormData"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-39962","object_id":"column-39962","name":"cFormDataId","name_without_path":"cFormDataId","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39944","object_id":"column-39944","name":"cFormCode","name_without_path":"cFormCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39945","object_id":"column-39945","name":"cVersionCode","name_without_path":"cVersionCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4109","name":"BG_Version","name_show_schema":"dbo.BG_Version"}]},{"id":"column-39946","object_id":"column-39946","name":"cOrganCode","name_without_path":"cOrganCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39947","object_id":"column-39947","name":"cOrganizer","name_without_path":"cOrganizer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39948","object_id":"column-39948","name":"cSubmit","name_without_path":"cSubmit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39949","object_id":"column-39949","name":"cAuditor","name_without_path":"cAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39950","object_id":"column-39950","name":"cAuditOpinion","name_without_path":"cAuditOpinion","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39951","object_id":"column-39951","name":"iSource","name_without_path":"iSource","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39952","object_id":"column-39952","name":"iState","name_without_path":"iState","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39953","object_id":"column-39953","name":"iFormType","name_without_path":"iFormType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39954","object_id":"column-39954","name":"dBuildTime","name_without_path":"dBuildTime","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39955","object_id":"column-39955","name":"iPeriodType","name_without_path":"iPeriodType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39956","object_id":"column-39956","name":"iAuditPeriod","name_without_path":"iAuditPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39957","object_id":"column-39957","name":"iSubmitPeriod","name_without_path":"iSubmitPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39958","object_id":"column-39958","name":"iYear","name_without_path":"iYear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39959","object_id":"column-39959","name":"cConstituteID","name_without_path":"cConstituteID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39960","object_id":"column-39960","name":"bCheckout","name_without_path":"bCheckout","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-39961","object_id":"column-39961","name":"iMakeYear","name_without_path":"iMakeYear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4109","name":"BG_Version","name_show_schema":"dbo.BG_Version"}]}],"relations":[{"name":"BG_Version_BG_FormData_FK1","title":null,"description":null,"is_user_defined":false,"foreign_table":"BG_FormData","foreign_table_show_schema":"dbo.BG_FormData","foreign_table_verbose":"BG_FormData","foreign_table_verbose_show_schema":"dbo.BG_FormData","foreign_table_object_id":"t4033","primary_table":"BG_Version","primary_table_show_schema":"dbo.BG_Version","primary_table_verbose":"BG_Version","primary_table_verbose_show_schema":"dbo.BG_Version","primary_table_object_id":"t4109","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cVersionCode","foreign_column_path":null,"foreign_column":"cVersionCode"},{"primary_column_path":null,"primary_column":"iMakeYear","foreign_column_path":null,"foreign_column":"iMakeYear"}],"custom_fields":{}}],"unique_keys":[{"name":"BG_FormData_PK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cFormDataId","name":"cFormDataId"}],"custom_fields":{}},{"name":"IX_BG_FormData","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"iMakeYear","name":"iMakeYear"},{"path":null,"name_without_path":"cFormCode","name":"cFormCode"},{"path":null,"name_without_path":"cVersionCode","name":"cVersionCode"},{"path":null,"name_without_path":"cOrganCode","name":"cOrganCode"},{"path":null,"name_without_path":"cConstituteID","name":"cConstituteID"},{"path":null,"name_without_path":"iYear","name":"iYear"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};