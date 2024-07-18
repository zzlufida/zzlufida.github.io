window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13695","name":"v_mps_atp","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--需求来源(32安全库存DemandSafeFlag/16计划需求DemandMpFlag/8委外DemandSuFlag/4生产订单DemandMoFlag /2出口DemandExFlag/1销售\r\n--供应来源(64现存量SupplyonhFlag/32请购SupplyRqFlag/16进口SupplyFpFlag/8采购SupplyPuFlag/4委外订单SupplySuFlag/2生产订单SupplyMoFlag/1计划订单SupplyMpFlag)\r\ncreate view v_mps_atp\r\nas\r\nselect ATPId,ATPCode,Description,OverDemandDays,OverSupplyDays,infiniteSupplyDays,DemandFlag,DemandSoFlag = (case when DemandFlag & 1 > 0 then 1 else 0 end ),DemandExFlag = (case when DemandFlag & 2 > 0 then 1 else 0 end ),\r\n       DemandMoFlag = (case when DemandFlag & 4 > 0 then 1 else 0 end ),DemandSuFlag = (case when DemandFlag & 8 > 0 then 1 else 0 end ),DemandMpFlag = (case when DemandFlag & 16 > 0 then 1 else 0 end ),\r\n       DemandSafeFlag = (case when DemandFlag & 32 > 0 then 1 else 0 end ),SupplyFlag,SupplyMpFlag = (case when SupplyFlag & 1 > 0 then 1 else 0 end ),SupplyMoFlag = (case when SupplyFlag & 2 > 0 then 1 else 0 end ),\r\n       SupplySuFlag = (case when SupplyFlag & 4 > 0 then 1 else 0 end ),SupplyPuFlag = (case when SupplyFlag & 8 > 0 then 1 else 0 end ),SupplyFpFlag = (case when SupplyFlag & 16 > 0 then 1 else 0 end ),\r\n       SupplyRqFlag = (case when SupplyFlag & 32 > 0 then 1 else 0 end ),SupplyOnhFlag = (case when SupplyFlag & 64 > 0 then 1 else 0 end ),\r\n       CreateTime,ModifyTime\r\n from mps_atp","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_mps_atp"},{"field":"Type","value":"View"}],"columns":[{"id":"column-395782","object_id":"column-395782","name":"ATPId","name_without_path":"ATPId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395783","object_id":"column-395783","name":"ATPCode","name_without_path":"ATPCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395784","object_id":"column-395784","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395785","object_id":"column-395785","name":"OverDemandDays","name_without_path":"OverDemandDays","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395786","object_id":"column-395786","name":"OverSupplyDays","name_without_path":"OverSupplyDays","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395787","object_id":"column-395787","name":"infiniteSupplyDays","name_without_path":"infiniteSupplyDays","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395788","object_id":"column-395788","name":"DemandFlag","name_without_path":"DemandFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395789","object_id":"column-395789","name":"DemandSoFlag","name_without_path":"DemandSoFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395790","object_id":"column-395790","name":"DemandExFlag","name_without_path":"DemandExFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395791","object_id":"column-395791","name":"DemandMoFlag","name_without_path":"DemandMoFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395792","object_id":"column-395792","name":"DemandSuFlag","name_without_path":"DemandSuFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395793","object_id":"column-395793","name":"DemandMpFlag","name_without_path":"DemandMpFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395794","object_id":"column-395794","name":"DemandSafeFlag","name_without_path":"DemandSafeFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395795","object_id":"column-395795","name":"SupplyFlag","name_without_path":"SupplyFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395796","object_id":"column-395796","name":"SupplyMpFlag","name_without_path":"SupplyMpFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395797","object_id":"column-395797","name":"SupplyMoFlag","name_without_path":"SupplyMoFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395798","object_id":"column-395798","name":"SupplySuFlag","name_without_path":"SupplySuFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395799","object_id":"column-395799","name":"SupplyPuFlag","name_without_path":"SupplyPuFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395800","object_id":"column-395800","name":"SupplyFpFlag","name_without_path":"SupplyFpFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395801","object_id":"column-395801","name":"SupplyRqFlag","name_without_path":"SupplyRqFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395802","object_id":"column-395802","name":"SupplyOnhFlag","name_without_path":"SupplyOnhFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395803","object_id":"column-395803","name":"CreateTime","name_without_path":"CreateTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-395804","object_id":"column-395804","name":"ModifyTime","name_without_path":"ModifyTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};