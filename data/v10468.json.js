window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10468","name":"crm_viewbomopcomponent","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW crm_viewbomopcomponent  \r\nas \r\nselect     \r\nbom.Version  ,    \r\na.PartId ,    \r\nh.ParentId ,    \r\nb.OpComponentId, \r\nb.ComponentId,       \r\nh.BomId, \r\ni.bPTOModel,   \r\nb.SortSeq,        \r\nh.SharingPartId,        \r\ni.cInvCode,        \r\ni.cInvName,              \r\nc.cComUnitName,--计量单位        \r\nc.cComunitCode,        \r\nb.EffBegDate,  --生效日期        \r\nb.EffEndDate,  -- 失效日期        \r\nb.FVFlag,      --固定用量         \r\n--i.iSupplyType, -- 供应类型      \r\nd.WIPType as iSupplyType, --WIP供应类型属性(1入库/2工序/3领料/4虚拟)           \r\nQty=(        \r\ncase b.FVFlag when 0 then round(b.BaseQtyN / b.BaseQtyD * (1 + b.CompScrap/100) ,2)         \r\nelse round(b.BaseQtyN / b.BaseQtyD * (1 + b.CompScrap/100) / (1 - h.ParentScrap/100) ,2) end), --使用数量        \r\nb.AuxUnitCode,        \r\nAuxUnitName =c1.cComUnitName,-- 辅助计量单位        \r\nb.ChangeRate,    --换算率        \r\nb.AuxBaseQtyN,   -- 辅助基本用量        \r\nAuxQty=(case b.FVFlag when 0 then round(b.AuxBaseQtyN / b.BaseQtyD  * (1 + b.CompScrap/100),2)         \r\nelse round(b.AuxBaseQtyN / b.BaseQtyD * (1 + b.CompScrap/100) / (1 - h.ParentScrap/100),2) end), --辅助使用量        \r\nb.ProductType, --产出类型(1:空/2:联产品/3:副产品)  \r\nbom.RelsUser,   --审核人  \r\nbom.CloseUser --关闭人        \r\nfrom bom_parent h      \r\ninner join bom_bom bom on h.BomId=bom.BomId and bom.BomType=1      \r\ninner join bom_opcomponent b on h.BomId = b.BomId         \r\ninner join bas_part a on b.ComponentId = a.PartId         \r\ninner join inventory i on a.InvCode = i.cInvCode         \r\ninner join ComputationUnit c on i.cComUnitCode = c.cComunitCode         \r\nleft outer join bom_opcomponentopt d on d.OptionsId = b.OptionsId         \r\nleft outer join ComputationUnit c1 on b.AuxUnitCode = c1.cComunitCode         \r\nwhere h.SharingPartId = 0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"crm_viewbomopcomponent"},{"field":"Type","value":"View"}],"columns":[{"id":"column-190046","object_id":"column-190046","name":"Version","name_without_path":"Version","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190047","object_id":"column-190047","name":"PartId","name_without_path":"PartId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190048","object_id":"column-190048","name":"ParentId","name_without_path":"ParentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190049","object_id":"column-190049","name":"OpComponentId","name_without_path":"OpComponentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190050","object_id":"column-190050","name":"ComponentId","name_without_path":"ComponentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190051","object_id":"column-190051","name":"BomId","name_without_path":"BomId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190052","object_id":"column-190052","name":"bPTOModel","name_without_path":"bPTOModel","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190053","object_id":"column-190053","name":"SortSeq","name_without_path":"SortSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190054","object_id":"column-190054","name":"SharingPartId","name_without_path":"SharingPartId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190055","object_id":"column-190055","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190056","object_id":"column-190056","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190057","object_id":"column-190057","name":"cComUnitName","name_without_path":"cComUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190058","object_id":"column-190058","name":"cComunitCode","name_without_path":"cComunitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190059","object_id":"column-190059","name":"EffBegDate","name_without_path":"EffBegDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190060","object_id":"column-190060","name":"EffEndDate","name_without_path":"EffEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190061","object_id":"column-190061","name":"FVFlag","name_without_path":"FVFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190062","object_id":"column-190062","name":"iSupplyType","name_without_path":"iSupplyType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190063","object_id":"column-190063","name":"Qty","name_without_path":"Qty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190064","object_id":"column-190064","name":"AuxUnitCode","name_without_path":"AuxUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190065","object_id":"column-190065","name":"AuxUnitName","name_without_path":"AuxUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190066","object_id":"column-190066","name":"ChangeRate","name_without_path":"ChangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_ChangeRate: decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190067","object_id":"column-190067","name":"AuxBaseQtyN","name_without_path":"AuxBaseQtyN","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190068","object_id":"column-190068","name":"AuxQty","name_without_path":"AuxQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190069","object_id":"column-190069","name":"ProductType","name_without_path":"ProductType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190070","object_id":"column-190070","name":"RelsUser","name_without_path":"RelsUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-190071","object_id":"column-190071","name":"CloseUser","name_without_path":"CloseUser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};