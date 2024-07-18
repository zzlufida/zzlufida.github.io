window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4641","name":"CM_StageGroupDetail","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_StageGroupDetail"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-47994","object_id":"column-47994","name":"cGroupCode","name_without_path":"cGroupCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4640","name":"CM_StageGroup","name_show_schema":"dbo.CM_StageGroup"}]},{"id":"column-47995","object_id":"column-47995","name":"cStageCode","name_without_path":"cStageCode","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4639","name":"CM_Stage","name_show_schema":"dbo.CM_Stage"}]},{"id":"column-47996","object_id":"column-47996","name":"cRemark","name_without_path":"cRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-47997","object_id":"column-47997","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_CM_StageGroupDetail_CM_Stage","title":null,"description":null,"is_user_defined":false,"foreign_table":"CM_StageGroupDetail","foreign_table_show_schema":"dbo.CM_StageGroupDetail","foreign_table_verbose":"CM_StageGroupDetail","foreign_table_verbose_show_schema":"dbo.CM_StageGroupDetail","foreign_table_object_id":"t4641","primary_table":"CM_Stage","primary_table_show_schema":"dbo.CM_Stage","primary_table_verbose":"CM_Stage","primary_table_verbose_show_schema":"dbo.CM_Stage","primary_table_object_id":"t4639","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cStageCode","foreign_column_path":null,"foreign_column":"cStageCode"}],"custom_fields":{}},{"name":"FK_CM_StageGroupDetail_CM_StageGroup","title":null,"description":null,"is_user_defined":false,"foreign_table":"CM_StageGroupDetail","foreign_table_show_schema":"dbo.CM_StageGroupDetail","foreign_table_verbose":"CM_StageGroupDetail","foreign_table_verbose_show_schema":"dbo.CM_StageGroupDetail","foreign_table_object_id":"t4641","primary_table":"CM_StageGroup","primary_table_show_schema":"dbo.CM_StageGroup","primary_table_verbose":"CM_StageGroup","primary_table_verbose_show_schema":"dbo.CM_StageGroup","primary_table_object_id":"t4640","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cGroupCode","foreign_column_path":null,"foreign_column":"cGroupCode"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_CM_StageGroupDetail","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cGroupCode","name":"cGroupCode"},{"path":null,"name_without_path":"cStageCode","name":"cStageCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};