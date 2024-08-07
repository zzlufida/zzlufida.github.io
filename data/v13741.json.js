window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13741","name":"v_mps_supplyorder","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_mps_supplyorder\r\nas\r\nSelect Distinct p.PlanCode,c1.ProjectId,SupplyType = 1,DocCode=c.PlanCode,DocSeq=Null , DemDate = c.LUCD,AuditDate = c.StartDate,Qty = c.PlanQty - c.CrdQty,\r\ni.InvCode,i.InvName, i.InvAddCode, i.InvStd, i.ComUnitCode,i.ComUnitName,i.InvAttr,\r\nb.Free1, b.Free2, b.Free3, b.Free4, b.Free5, b.Free6, b.Free7, b.Free8, b.Free9, b.Free10,\r\ni.InvDefine1,i.InvDefine2,i.InvDefine3,i.InvDefine4,i.InvDefine5,i.InvDefine6,i.InvDefine7, i.InvDefine8, \r\ni.InvDefine9,i.InvDefine10,i.InvDefine11,i.InvDefine12,i.InvDefine13,i.InvDefine14,i.InvDefine15, i.InvDefine16, Status = 1,\r\nReplaceFlag = case when c1.ReplaceRelFlag in (1,2) then '*' else '' end\r\nFrom mps_NetDemandbak c,mps_schedulebak c1 , bas_part b, v_bas_inventory i ,mps_planproject j,mps_plancode p\r\nWhere  c1.SchId = c.SchId and c.PartId = b.PartId and b.InvCode = i.InvCode and c.projectid=j.projectid and j.plancodeid=p.plancodeid\r\nunion\r\nSelect distinct p.PlanCode,c.ProjectId,SupplyType = 2,DocCode=m.MoCode,DocSeq=d.SortSeq,DemDate =case when t.DueDate is null then m1.DueDate else t.DueDate end,\r\nAuditDate = case when t.AuditDate is null then m1.StartDate else t.AuditDate end,Qty = c.BalQty,\r\ni.InvCode,i.InvName, i.InvAddCode, i.InvStd, i.ComUnitCode,i.ComUnitName,i.InvAttr,\r\nb.Free1, b.Free2, b.Free3, b.Free4, b.Free5, b.Free6, b.Free7, b.Free8, b.Free9, b.Free10,\r\n i.InvDefine1,i.InvDefine2,i.InvDefine3,i.InvDefine4,i.InvDefine5,i.InvDefine6,i.InvDefine7,\r\ni.InvDefine8, \r\ni.InvDefine9,i.InvDefine10,i.InvDefine11,i.InvDefine12,i.InvDefine13,i.InvDefine14,i.InvDefine15, i.InvDefine16, \r\n Status = d.Status,ReplaceFlag = ''\r\nfrom mps_schedulebak c \r\ninner join mom_orderdetail d  on c.RefDocDId = d.MoDId \r\ninner join mom_order m on d.MoId = m.MoId\r\nLeft outer join mom_morder m1 on d.MoDId = m1.MoDId \r\nleft outer join (select ProjectId=c1.ProjectId,MoDId = m.MoDId, DueDate = min(c1.DemDate), AuditDate = Max(c1.DemDate),BalQty = sum(c1.BalQty)\r\n     from mps_schedulebak c1, mom_remorder m\r\n    where c1.RefDocDId = m.MoDId \r\n   group by m.MoDId,c1.ProjectId) t on t.MoDId = d.MoDId  and t.ProjectId = c.ProjectId\r\ninner join bas_part b on c.PartId = b.PartId \r\ninner join  v_bas_inventory i on b.InvCode = i.InvCode\r\ninner join mps_planproject j on c.projectid=j.projectid\r\ninner join mps_plancode p on j.plancodeid=p.plancodeid\r\nwhere c.DemType in (1,4) \r\nunion\r\nSelect distinct p.PlanCode,c.ProjectId,SupplyType = 3,DocCode = pu.cCode, DocSeq = pu1.ivouchrowno,DemDate = c.DemDate,AuditDate = c.AuditDate,Qty = c.BalQty,\r\ni.InvCode,i.InvName, i.InvAddCode, i.InvStd, i.ComUnitCode,i.ComUnitName,i.InvAttr,\r\nb.Free1, b.Free2, b.Free3, b.Free4, b.Free5, b.Free6, b.Free7, b.Free8, b.Free9, b.Free10,\r\ni.InvDefine1,i.InvDefine2,i.InvDefine3,i.InvDefine4,i.InvDefine5,i.InvDefine6,i.InvDefine7, i.InvDefine8, \r\ni.InvDefine9,i.InvDefine10,i.InvDefine11,i.InvDefine12,i.InvDefine13,i.InvDefine14,i.InvDefine15, i.InvDefine16, \r\nStatus = case when c.DemType = 7 then 2 else 3 end, ReplaceFlag = ''\r\nFrom mps_schedulebak c, Pu_AppVouchs pu1, Pu_AppVouch pu ,bas_part b, v_bas_inventory i,mps_planproject j,mps_plancode p\r\nWhere c.DemType in (7,8) and  c.RefDocDId = pu1.AutoId and pu1.ID = pu.ID and  c.PartId = b.PartId and b.InvCode = i.InvCode and c.projectid=j.projectid and j.plancodeid=p.plancodeid\r\nunion\r\nSelect distinct p.PlanCode,c.ProjectId,SupplyType = 4,DocCode = po.cPoId, DocSeq = po1.ivouchrowno,DemDate = c.DemDate,bAuditDate = c.AuditDate,Qty = c.BalQty,\r\ni.InvCode,i.InvName, i.InvAddCode, i.InvStd, i.ComUnitCode,i.ComUnitName,i.InvAttr,\r\nb.Free1, b.Free2, b.Free3, b.Free4, b.Free5, b.Free6, b.Free7, b.Free8, b.Free9, b.Free10,\r\ni.InvDefine1,i.InvDefine2,i.InvDefine3,i.InvDefine4,i.InvDefine5,i.InvDefine6,i.InvDefine7, i.InvDefine8, \r\ni.InvDefine9,i.InvDefine10,i.InvDefine11,i.InvDefine12,i.InvDefine13,i.InvDefine14,i.InvDefine15, i.InvDefine16, \r\nStatus = case when c.DemType = 2 then 2 else 3 end, ReplaceFlag = ''\r\nFrom mps_schedulebak c, Po_Podetails po1, PO_Pomain po,bas_part b, v_bas_inventory i,mps_planproject j,mps_plancode p\r\nWhere c.DemType in (2,5) and c.ExternalFlag=0 and c.RefDocDId = po1.Id and po1.PoId = po.PoId and c.PartId = b.PartId and b.InvCode = i.InvCode and c.projectid=j.projectid and j.plancodeid=p.plancodeid\r\nunion\r\nselect distinct p.PlanCode,c.ProjectId,SupplyType = 5,DocCode = im.cCode, DocSeq = Null,DemDate = c.DemDate,AuditDate = c.AuditDate,Qty = c.BalQty,\r\ni.InvCode,i.InvName, i.InvAddCode, i.InvStd, i.ComUnitCode,i.ComUnitName,i.InvAttr,\r\nb.Free1, b.Free2, b.Free3, b.Free4, b.Free5, b.Free6, b.Free7, b.Free8, b.Free9, b.Free10,\r\ni.InvDefine1,i.InvDefine2,i.InvDefine3,i.InvDefine4,i.InvDefine5,i.InvDefine6,i.InvDefine7, i.InvDefine8, \r\ni.InvDefine9,i.InvDefine10,i.InvDefine11,i.InvDefine12,i.InvDefine13,i.InvDefine14,i.InvDefine15, i.InvDefine16, \r\nStatus = case when c.DemType = 2 then 2 else 3 end, ReplaceFlag = ''\r\nfrom mps_schedulebak c, im_orderdetail im1, im_order im,bas_part b, v_bas_inventory i,mps_planproject j,mps_plancode p\r\nwhere c.DemType in (2,5) and c.ExternalFlag=1 and c.RefDocDId = im1.AutoId and im1.Id = im.Id and c.PartId = b.PartId and b.InvCode = i.InvCode and c.projectid=j.projectid and j.plancodeid=p.plancodeid\r\nunion\r\nselect distinct p.PlanCode,c.ProjectId,SupplyType = 6,DocCode = om.cCode, DocSeq = om1.ivouchrowno, DemDate = c.DemDate,AuditDate = c.AuditDate,Qty = c.BalQty,\r\ni.InvCode,i.InvName, i.InvAddCode, i.InvStd, i.ComUnitCode,i.ComUnitName,i.InvAttr,\r\nb.Free1, b.Free2, b.Free3, b.Free4, b.Free5, b.Free6, b.Free7, b.Free8, b.Free9, b.Free10,\r\ni.InvDefine1,i.InvDefine2,i.InvDefine3,i.InvDefine4,i.InvDefine5,i.InvDefine6,i.InvDefine7, i.InvDefine8, \r\ni.InvDefine9,i.InvDefine10,i.InvDefine11,i.InvDefine12,i.InvDefine13,i.InvDefine14,i.InvDefine15, i.InvDefine16, \r\nStatus = case when c.DemType = 3 then 2 else 3 end, ReplaceFlag = ''\r\nfrom mps_schedulebak c, OM_MODetails om1, OM_MOMain om,bas_part b, v_bas_inventory i,mps_planproject j,mps_plancode p\r\nwhere  c.DemType in (3,6) and c.RefDocDId = om1.MoDetailsId and om1.MoId = om.MoId and c.PartId = b.PartId and b.InvCode = i.InvCode and c.projectid=j.projectid and j.plancodeid=p.plancodeid\r\nunion\r\nselect distinct p.PlanCode,c.ProjectId,SupplyType = 7,DocCode = so.cSoCode, DocSeq = iRowNo, DemDate = c.DemDate,AuditDate = c.AuditDate,Qty = c.BalQty,\r\ni.InvCode,i.InvName, i.InvAddCode, i.InvStd, i.ComUnitCode,i.ComUnitName,i.InvAttr,\r\nb.Free1, b.Free2, b.Free3, b.Free4, b.Free5, b.Free6, b.Free7, b.Free8, b.Free9, b.Free10,\r\ni.InvDefine1,i.InvDefine2,i.InvDefine3,i.InvDefine4,i.InvDefine5,i.InvDefine6,i.InvDefine7, i.InvDefine8, \r\ni.InvDefine9,i.InvDefine10,i.InvDefine11,i.InvDefine12,i.InvDefine13,i.InvDefine14,i.InvDefine15, i.InvDefine16, \r\nStatus = case when c.DemType = 15 then 2 else 3 end, ReplaceFlag = ''\r\nfrom mps_schedulebak c, So_SoMain so, So_SoDetails so1,bas_part b, v_bas_inventory i,mps_planproject j,mps_plancode p\r\nwhere c.DemType in (15,16) and c.refdocdid = so1.iSosId and so.Id = so1.Id and c.PartId = b.PartId and b.InvCode = i.InvCode and c.projectid=j.projectid and j.plancodeid=p.plancodeid\r\nunion\r\nselect distinct p.PlanCode,c.ProjectId,SupplyType = 8,DocCode = ex.cCode, DocSeq = iRowNo, DemDate = c.DemDate,AuditDate = c.AuditDate,Qty = c.BalQty,\r\ni.InvCode,i.InvName, i.InvAddCode, i.InvStd, i.ComUnitCode,i.ComUnitName,i.InvAttr,\r\nb.Free1, b.Free2, b.Free3, b.Free4, b.Free5, b.Free6, b.Free7, b.Free8, b.Free9, b.Free10,\r\ni.InvDefine1,i.InvDefine2,i.InvDefine3,i.InvDefine4,i.InvDefine5,i.InvDefine6,i.InvDefine7, i.InvDefine8, \r\ni.InvDefine9,i.InvDefine10,i.InvDefine11,i.InvDefine12,i.InvDefine13,i.InvDefine14,i.InvDefine15, i.InvDefine16, \r\nStatus = case when c.DemType = 17 then 2 else 3 end, ReplaceFlag = ''\r\nfrom mps_schedulebak c, ex_orderdetail ex1, ex_order ex,bas_part b, v_bas_inventory i,mps_planproject j,mps_plancode p\r\nwhere c.DemType in (17,18) and c.RefDocDId = ex1.autoid and ex.Id = ex1.Id and c.PartId = b.PartId and b.InvCode = i.InvCode  and c.projectid=j.projectid and j.plancodeid=p.plancodeid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_mps_supplyorder"},{"field":"Type","value":"View"}],"columns":[{"id":"column-397169","object_id":"column-397169","name":"PlanCode","name_without_path":"PlanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397170","object_id":"column-397170","name":"ProjectId","name_without_path":"ProjectId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397171","object_id":"column-397171","name":"SupplyType","name_without_path":"SupplyType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397172","object_id":"column-397172","name":"DocCode","name_without_path":"DocCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397173","object_id":"column-397173","name":"DocSeq","name_without_path":"DocSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397174","object_id":"column-397174","name":"DemDate","name_without_path":"DemDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397175","object_id":"column-397175","name":"AuditDate","name_without_path":"AuditDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397176","object_id":"column-397176","name":"Qty","name_without_path":"Qty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"29, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397177","object_id":"column-397177","name":"InvCode","name_without_path":"InvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397178","object_id":"column-397178","name":"InvName","name_without_path":"InvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397179","object_id":"column-397179","name":"InvAddCode","name_without_path":"InvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397180","object_id":"column-397180","name":"InvStd","name_without_path":"InvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397181","object_id":"column-397181","name":"ComUnitCode","name_without_path":"ComUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397182","object_id":"column-397182","name":"ComUnitName","name_without_path":"ComUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397183","object_id":"column-397183","name":"InvAttr","name_without_path":"InvAttr","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397184","object_id":"column-397184","name":"Free1","name_without_path":"Free1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397185","object_id":"column-397185","name":"Free2","name_without_path":"Free2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397186","object_id":"column-397186","name":"Free3","name_without_path":"Free3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397187","object_id":"column-397187","name":"Free4","name_without_path":"Free4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397188","object_id":"column-397188","name":"Free5","name_without_path":"Free5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397189","object_id":"column-397189","name":"Free6","name_without_path":"Free6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397190","object_id":"column-397190","name":"Free7","name_without_path":"Free7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397191","object_id":"column-397191","name":"Free8","name_without_path":"Free8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397192","object_id":"column-397192","name":"Free9","name_without_path":"Free9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397193","object_id":"column-397193","name":"Free10","name_without_path":"Free10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397194","object_id":"column-397194","name":"InvDefine1","name_without_path":"InvDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397195","object_id":"column-397195","name":"InvDefine2","name_without_path":"InvDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397196","object_id":"column-397196","name":"InvDefine3","name_without_path":"InvDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397197","object_id":"column-397197","name":"InvDefine4","name_without_path":"InvDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397198","object_id":"column-397198","name":"InvDefine5","name_without_path":"InvDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397199","object_id":"column-397199","name":"InvDefine6","name_without_path":"InvDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397200","object_id":"column-397200","name":"InvDefine7","name_without_path":"InvDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397201","object_id":"column-397201","name":"InvDefine8","name_without_path":"InvDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397202","object_id":"column-397202","name":"InvDefine9","name_without_path":"InvDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397203","object_id":"column-397203","name":"InvDefine10","name_without_path":"InvDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397204","object_id":"column-397204","name":"InvDefine11","name_without_path":"InvDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397205","object_id":"column-397205","name":"InvDefine12","name_without_path":"InvDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397206","object_id":"column-397206","name":"InvDefine13","name_without_path":"InvDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397207","object_id":"column-397207","name":"InvDefine14","name_without_path":"InvDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397208","object_id":"column-397208","name":"InvDefine15","name_without_path":"InvDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397209","object_id":"column-397209","name":"InvDefine16","name_without_path":"InvDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397210","object_id":"column-397210","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397211","object_id":"column-397211","name":"ReplaceFlag","name_without_path":"ReplaceFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};