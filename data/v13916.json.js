window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13916","name":"v_sfc_SumPFQtyByMoDId","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_sfc_SumPFQtyByMoDId as\r\n\r\nselect pf.MoDId,PFQty=Sum(pf.Qty) from sfc_processflow pf inner join sfc_moroutingdetail md on pf.MoRoutingId = md.MoRoutingId and  md.FirstFlag = 1\r\nwhere  md.SubFlag = 0 and pf.PFId not in (select distinct ppd.RelPFId from sfc_pfalterationdetail ppd inner join sfc_pfalteration ppm on ppm.PFAlterationId = ppd.PFAlterationId and ppm.AType = 1 and ppm.MoDId = pf.MoDId)\r\nGroup By pf.MoDId\r\nunion\r\nselect pf.MoDId,PFQty=Sum(pf.sumQty) from sfc_processflow pf inner join sfc_moroutingdetail md on pf.MoRoutingId = md.MoRoutingId and  md.FirstFlag = 1\r\nwhere  md.SubFlag = 1 and pf.MoDId in (select distinct pa.modid from sfc_pfalteration pa where pa.modid = pf.modid and pa.moroutingdid = md.moroutingdid) \r\nGroup By pf.MoDId\r\nunion\r\nselect pf.MoDId,PFQty=Sum(pf.Qty) from sfc_processflow pf inner join sfc_moroutingdetail md on pf.MoRoutingId = md.MoRoutingId and  md.FirstFlag = 1\r\nwhere  md.SubFlag = 1 and pf.MoDId not in (select distinct pa.modid from sfc_pfalteration pa where pa.modid = pf.modid and pa.moroutingdid = md.moroutingdid) and pf.PFId not in (select distinct ppd.RelPFId from sfc_pfalterationdetail ppd inner join sfc_pfalteration ppm on ppm.PFAlterationId = ppd.PFAlterationId and ppm.AType = 1 and ppm.MoDId = pf.MoDId)\r\nGroup By pf.MoDId","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_sfc_SumPFQtyByMoDId"},{"field":"Type","value":"View"}],"columns":[{"id":"column-406683","object_id":"column-406683","name":"MoDId","name_without_path":"MoDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-406684","object_id":"column-406684","name":"PFQty","name_without_path":"PFQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};