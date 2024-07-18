window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5093","name":"Engine_PubChannelTask","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Engine_PubChannelTask"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-56125","object_id":"column-56125","name":"MsgID","name_without_path":"MsgID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t5095","name":"Engine_PubMsg","name_show_schema":"dbo.Engine_PubMsg"}]},{"id":"column-56118","object_id":"column-56118","name":"ChannelID","name_without_path":"ChannelID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t6847","name":"IB_MsgChannel","name_show_schema":"dbo.IB_MsgChannel"}]},{"id":"column-56119","object_id":"column-56119","name":"RetryCount","name_without_path":"RetryCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"5","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-56120","object_id":"column-56120","name":"CurrentRetryCount","name_without_path":"CurrentRetryCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-56121","object_id":"column-56121","name":"RetryTime","name_without_path":"RetryTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"getdate()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-56122","object_id":"column-56122","name":"ExpiresTime","name_without_path":"ExpiresTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-56123","object_id":"column-56123","name":"PriorLevel","name_without_path":"PriorLevel","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-56124","object_id":"column-56124","name":"OnLine","name_without_path":"OnLine","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_PubChannelTask_PubMsg","title":null,"description":null,"is_user_defined":false,"foreign_table":"Engine_PubChannelTask","foreign_table_show_schema":"dbo.Engine_PubChannelTask","foreign_table_verbose":"Engine_PubChannelTask","foreign_table_verbose_show_schema":"dbo.Engine_PubChannelTask","foreign_table_object_id":"t5093","primary_table":"Engine_PubMsg","primary_table_show_schema":"dbo.Engine_PubMsg","primary_table_verbose":"Engine_PubMsg","primary_table_verbose_show_schema":"dbo.Engine_PubMsg","primary_table_object_id":"t5095","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"MsgID","foreign_column_path":null,"foreign_column":"MsgID"}],"custom_fields":{}},{"name":"FK_PubChannelTask_IB_MsgChannel","title":null,"description":null,"is_user_defined":false,"foreign_table":"Engine_PubChannelTask","foreign_table_show_schema":"dbo.Engine_PubChannelTask","foreign_table_verbose":"Engine_PubChannelTask","foreign_table_verbose_show_schema":"dbo.Engine_PubChannelTask","foreign_table_object_id":"t5093","primary_table":"IB_MsgChannel","primary_table_show_schema":"dbo.IB_MsgChannel","primary_table_verbose":"IB_MsgChannel","primary_table_verbose_show_schema":"dbo.IB_MsgChannel","primary_table_object_id":"t6847","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ID","foreign_column_path":null,"foreign_column":"ChannelID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_Engine_PubChannelTask","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"MsgID","name":"MsgID"},{"path":null,"name_without_path":"ChannelID","name":"ChannelID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};