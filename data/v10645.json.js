window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10645","name":"EQ_QWorkPlanRef","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View EQ_QWorkPlanRef AS \r\nSelect cPlanCode,EQ_WorkPlan.cWorkTypeCode,\r\nEQ_WorkType.cWorkTypeName,\r\ndtPlanStart, dtPlanEnd, \r\ncMaker,dtDate \r\nFrom EQ_WorkPlan inner join EQ_WorkType on EQ_WorkPlan.cWorkTypeCode = EQ_WorkType.cWorkTypeCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EQ_QWorkPlanRef"},{"field":"Type","value":"View"}],"columns":[{"id":"column-199352","object_id":"column-199352","name":"cPlanCode","name_without_path":"cPlanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199353","object_id":"column-199353","name":"cWorkTypeCode","name_without_path":"cWorkTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199354","object_id":"column-199354","name":"cWorkTypeName","name_without_path":"cWorkTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199355","object_id":"column-199355","name":"dtPlanStart","name_without_path":"dtPlanStart","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199356","object_id":"column-199356","name":"dtPlanEnd","name_without_path":"dtPlanEnd","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199357","object_id":"column-199357","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-199358","object_id":"column-199358","name":"dtDate","name_without_path":"dtDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};