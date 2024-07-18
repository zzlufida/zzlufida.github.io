window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6847","name":"IB_MsgChannel","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"IB_MsgChannel"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-88324","object_id":"column-88324","name":"ID","name_without_path":"ID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88325","object_id":"column-88325","name":"ChannelName","name_without_path":"ChannelName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88326","object_id":"column-88326","name":"OriginAppSys","name_without_path":"OriginAppSys","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"-1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88327","object_id":"column-88327","name":"OriginAppType","name_without_path":"OriginAppType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"-1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88328","object_id":"column-88328","name":"OriginAppTag","name_without_path":"OriginAppTag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"-1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88329","object_id":"column-88329","name":"OriginMsgType","name_without_path":"OriginMsgType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"-1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88330","object_id":"column-88330","name":"TargetAppSys","name_without_path":"TargetAppSys","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"-1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88331","object_id":"column-88331","name":"TargetAppType","name_without_path":"TargetAppType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"-1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88332","object_id":"column-88332","name":"TargetAppTag","name_without_path":"TargetAppTag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"-1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88333","object_id":"column-88333","name":"TargetMsgType","name_without_path":"TargetMsgType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"-1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88334","object_id":"column-88334","name":"ResponseChannelID","name_without_path":"ResponseChannelID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88335","object_id":"column-88335","name":"IsResponse","name_without_path":"IsResponse","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88336","object_id":"column-88336","name":"IsSubscription","name_without_path":"IsSubscription","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88337","object_id":"column-88337","name":"MsgFilterID","name_without_path":"MsgFilterID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88338","object_id":"column-88338","name":"FilterExpression","name_without_path":"FilterExpression","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88339","object_id":"column-88339","name":"ChannelProcessors","name_without_path":"ChannelProcessors","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88340","object_id":"column-88340","name":"EndPointID","name_without_path":"EndPointID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88341","object_id":"column-88341","name":"IsTemplate","name_without_path":"IsTemplate","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88342","object_id":"column-88342","name":"ExtendProperties","name_without_path":"ExtendProperties","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-88343","object_id":"column-88343","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_P2PChannelTask_IB_MsgChannel","title":null,"description":null,"is_user_defined":false,"foreign_table":"Engine_P2PChannelTask","foreign_table_show_schema":"dbo.Engine_P2PChannelTask","foreign_table_verbose":"Engine_P2PChannelTask","foreign_table_verbose_show_schema":"dbo.Engine_P2PChannelTask","foreign_table_object_id":"t5087","primary_table":"IB_MsgChannel","primary_table_show_schema":"dbo.IB_MsgChannel","primary_table_verbose":"IB_MsgChannel","primary_table_verbose_show_schema":"dbo.IB_MsgChannel","primary_table_object_id":"t6847","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ID","foreign_column_path":null,"foreign_column":"ChannelID"}],"custom_fields":{}},{"name":"FK_PubChannelTask_IB_MsgChannel","title":null,"description":null,"is_user_defined":false,"foreign_table":"Engine_PubChannelTask","foreign_table_show_schema":"dbo.Engine_PubChannelTask","foreign_table_verbose":"Engine_PubChannelTask","foreign_table_verbose_show_schema":"dbo.Engine_PubChannelTask","foreign_table_object_id":"t5093","primary_table":"IB_MsgChannel","primary_table_show_schema":"dbo.IB_MsgChannel","primary_table_verbose":"IB_MsgChannel","primary_table_verbose_show_schema":"dbo.IB_MsgChannel","primary_table_object_id":"t6847","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ID","foreign_column_path":null,"foreign_column":"ChannelID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_IB_MsgChannel","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ID","name":"ID"}],"custom_fields":{}},{"name":"Uq_IB_ChannelName","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ChannelName","name":"ChannelName"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};