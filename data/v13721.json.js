window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13721","name":"v_mps_netdemand","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_mps_netdemand\r\nas\r\nSELECT DemandId=mps_netdemand.DemandId,   \r\n         PartId=mps_netdemand.PartId,   \r\n         SoType=mps_netdemand.SoType,   \r\n         SoDId=mps_netdemand.SoDId,   \r\n         SoCode = mps_netdemand.SoCode,\r\n         SoSeq =  mps_netdemand.SoSeq,\r\n         PlanCode=mps_netdemand.PlanCode,   \r\n         DueDate=mps_netdemand.LUCD,   \r\n         StartDate=mps_netdemand.LUSD,   \r\n         UnitCode=Inventory.cComUnitCode,\r\n         ComUnitName=ComputationUnit.cComUnitName,  \r\n         PlanQty=mps_netdemand.PlanQty,   \r\n         CrdQty=mps_netdemand.CrdQty,   \r\n         SupplyType=mps_netdemand.SupplyType,   \r\n         Ufts=mps_netdemand.Ufts,   \r\n         InvCode=bas_part.InvCode,   \r\n         InvAddCode = Inventory.cInvAddCode,   \r\n         InvName = Inventory.cInvName,   \r\n         InvStd = Inventory.cInvStd,         \r\n         Free1=bas_part.Free1,   \r\n         Free2=bas_part.Free2,   \r\n         Free3=bas_part.Free3,   \r\n         Free4=bas_part.Free4,   \r\n         Free5=bas_part.Free5,   \r\n         Free6=bas_part.Free6,   \r\n         Free7=bas_part.Free7,   \r\n         Free8=bas_part.Free8,   \r\n         Free9=bas_part.Free9,   \r\n         Free10=bas_part.Free10,\r\n         InvDefine1 = Inventory.cInvDefine1,   \r\n         InvDefine2 = Inventory.cInvDefine2,   \r\n         InvDefine3 = Inventory.cInvDefine3,   \r\n         InvDefine4 = Inventory.cInvDefine4,   \r\n         InvDefine5 = Inventory.cInvDefine5,   \r\n         InvDefine6 = Inventory.cInvDefine6,   \r\n         InvDefine7 = Inventory.cInvDefine7,   \r\n         InvDefine8 = Inventory.cInvDefine8,   \r\n         InvDefine9 = Inventory.cInvDefine9,   \r\n         InvDefine10 = Inventory.cInvDefine10,   \r\n         InvDefine11 = Inventory.cInvDefine11,   \r\n         InvDefine12 = Inventory.cInvDefine12,   \r\n         InvDefine13 = Inventory.cInvDefine13,   \r\n         InvDefine14 = Inventory.cInvDefine14,   \r\n         InvDefine15 = Inventory.cInvDefine15,   \r\n         InvDefine16 = Inventory.cInvDefine16,\r\n         mps_netdemand.SchId,\r\n         PDemandCode = Case when mps_netdemand.SoType = 4 then mps_netdemand.SoCode else null end, --母件需求分类代号\r\n\t PDemandCodeDesc = pa.cRClassName, --子件需求分类说明\r\n\t CDemandCode = mps_netdemand.DemandCode,--子件需求分类代号\r\n\t CDemandCodeDesc = ca.cRClassName, --子件需求分类说明\r\n\t mps_netdemand.SupplyingRCode,mps_netdemand.SupplyingPCode,\r\n         mps_netdemand.OrderType,mps_netdemand.OrderDId,\r\n         mps_netdemand.Define22,mps_netdemand.Define23,mps_netdemand.Define24,mps_netdemand.Define25,\r\n\t mps_netdemand.Define26,mps_netdemand.Define27,mps_netdemand.Define28,mps_netdemand.Define29,\r\n\t mps_netdemand.Define30,mps_netdemand.Define31,mps_netdemand.Define32,mps_netdemand.Define33,\r\n\t mps_netdemand.Define34,mps_netdemand.Define35,mps_netdemand.Define36,mps_netdemand.Define37,\r\n\t mps_netdemand.ProcQty,mps_netdemand.CopyDemandId,mps_netdemand.OrgDemQty,\r\n\t mps_netdemand.OrgDemType,mps_netdemand.OrgDemDId,mps_netdemand.OrgDemCode,mps_netdemand.OrgDemSeq,\r\n    case when p.PlanType = 3 then p.plancode else null end as planlotnumber,p.PlanType, --11.1计划批号,计划类型\r\n    mps_netdemand.status,\r\n    mps_netdemand.FactoryCode, --130工厂编码\r\n    Factory.cFactoryName as  FactoryName,--130工厂名称\r\n    mps_schedule.Rscdate --重规划日\r\n    ,mps_netdemand.PurEmplCode\r\n    FROM mps_netdemand left outer join bas_part on bas_part.PartId = mps_netdemand.PartId \r\n                       left outer join Inventory on Inventory.cInvCode = bas_part.InvCode\r\n                       left outer join ComputationUnit on ComputationUnit.cComunitCode = Inventory.cComUnitCode\r\n                     left outer join Factory on Factory.cFactoryCode = mps_netdemand.FactoryCode                      \r\n                       inner join  mps_planproject ps on ps.ProjectId = mps_netdemand.ProjectId\r\n             LEFT OUTER JOIN AA_RequirementClass as ca on ca.cRClassCode = mps_netdemand.DemandCode\r\n                       LEFT OUTER JOIN AA_RequirementClass as pa on pa.cRClassCode = mps_netdemand.SoCode and mps_netdemand.SoType = 4\r\n                       inner join mps_plancode p ON ps.PlanCodeId =p.PlanCodeId --11.1 取计划批号\r\n\t\t       left outer join mps_schedule on mps_schedule.DemType = 9 and mps_schedule.SchId = mps_netdemand.SchId\r\n   where Inventory.bPlanInv = 0 and mps_netdemand.delflag = 0 and  ps.ActiveFlag = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_mps_netdemand"},{"field":"Type","value":"View"}],"columns":[{"id":"column-396539","object_id":"column-396539","name":"DemandId","name_without_path":"DemandId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396540","object_id":"column-396540","name":"PartId","name_without_path":"PartId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396541","object_id":"column-396541","name":"SoType","name_without_path":"SoType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396542","object_id":"column-396542","name":"SoDId","name_without_path":"SoDId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396543","object_id":"column-396543","name":"SoCode","name_without_path":"SoCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396544","object_id":"column-396544","name":"SoSeq","name_without_path":"SoSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396545","object_id":"column-396545","name":"PlanCode","name_without_path":"PlanCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396546","object_id":"column-396546","name":"DueDate","name_without_path":"DueDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396547","object_id":"column-396547","name":"StartDate","name_without_path":"StartDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396548","object_id":"column-396548","name":"UnitCode","name_without_path":"UnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396549","object_id":"column-396549","name":"ComUnitName","name_without_path":"ComUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396550","object_id":"column-396550","name":"PlanQty","name_without_path":"PlanQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396551","object_id":"column-396551","name":"CrdQty","name_without_path":"CrdQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396552","object_id":"column-396552","name":"SupplyType","name_without_path":"SupplyType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396553","object_id":"column-396553","name":"Ufts","name_without_path":"Ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396554","object_id":"column-396554","name":"InvCode","name_without_path":"InvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396555","object_id":"column-396555","name":"InvAddCode","name_without_path":"InvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396556","object_id":"column-396556","name":"InvName","name_without_path":"InvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396557","object_id":"column-396557","name":"InvStd","name_without_path":"InvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396558","object_id":"column-396558","name":"Free1","name_without_path":"Free1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396559","object_id":"column-396559","name":"Free2","name_without_path":"Free2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396560","object_id":"column-396560","name":"Free3","name_without_path":"Free3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396561","object_id":"column-396561","name":"Free4","name_without_path":"Free4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396562","object_id":"column-396562","name":"Free5","name_without_path":"Free5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396563","object_id":"column-396563","name":"Free6","name_without_path":"Free6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396564","object_id":"column-396564","name":"Free7","name_without_path":"Free7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396565","object_id":"column-396565","name":"Free8","name_without_path":"Free8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396566","object_id":"column-396566","name":"Free9","name_without_path":"Free9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396567","object_id":"column-396567","name":"Free10","name_without_path":"Free10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396568","object_id":"column-396568","name":"InvDefine1","name_without_path":"InvDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396569","object_id":"column-396569","name":"InvDefine2","name_without_path":"InvDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396570","object_id":"column-396570","name":"InvDefine3","name_without_path":"InvDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396571","object_id":"column-396571","name":"InvDefine4","name_without_path":"InvDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396572","object_id":"column-396572","name":"InvDefine5","name_without_path":"InvDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396573","object_id":"column-396573","name":"InvDefine6","name_without_path":"InvDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396574","object_id":"column-396574","name":"InvDefine7","name_without_path":"InvDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396575","object_id":"column-396575","name":"InvDefine8","name_without_path":"InvDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396576","object_id":"column-396576","name":"InvDefine9","name_without_path":"InvDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396577","object_id":"column-396577","name":"InvDefine10","name_without_path":"InvDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396578","object_id":"column-396578","name":"InvDefine11","name_without_path":"InvDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396579","object_id":"column-396579","name":"InvDefine12","name_without_path":"InvDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396580","object_id":"column-396580","name":"InvDefine13","name_without_path":"InvDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396581","object_id":"column-396581","name":"InvDefine14","name_without_path":"InvDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396582","object_id":"column-396582","name":"InvDefine15","name_without_path":"InvDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396583","object_id":"column-396583","name":"InvDefine16","name_without_path":"InvDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396584","object_id":"column-396584","name":"SchId","name_without_path":"SchId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396585","object_id":"column-396585","name":"PDemandCode","name_without_path":"PDemandCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396586","object_id":"column-396586","name":"PDemandCodeDesc","name_without_path":"PDemandCodeDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396587","object_id":"column-396587","name":"CDemandCode","name_without_path":"CDemandCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396588","object_id":"column-396588","name":"CDemandCodeDesc","name_without_path":"CDemandCodeDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396589","object_id":"column-396589","name":"SupplyingRCode","name_without_path":"SupplyingRCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396590","object_id":"column-396590","name":"SupplyingPCode","name_without_path":"SupplyingPCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396591","object_id":"column-396591","name":"OrderType","name_without_path":"OrderType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396592","object_id":"column-396592","name":"OrderDId","name_without_path":"OrderDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396593","object_id":"column-396593","name":"Define22","name_without_path":"Define22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396594","object_id":"column-396594","name":"Define23","name_without_path":"Define23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396595","object_id":"column-396595","name":"Define24","name_without_path":"Define24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396596","object_id":"column-396596","name":"Define25","name_without_path":"Define25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396597","object_id":"column-396597","name":"Define26","name_without_path":"Define26","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396598","object_id":"column-396598","name":"Define27","name_without_path":"Define27","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396599","object_id":"column-396599","name":"Define28","name_without_path":"Define28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396600","object_id":"column-396600","name":"Define29","name_without_path":"Define29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396601","object_id":"column-396601","name":"Define30","name_without_path":"Define30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396602","object_id":"column-396602","name":"Define31","name_without_path":"Define31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396603","object_id":"column-396603","name":"Define32","name_without_path":"Define32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396604","object_id":"column-396604","name":"Define33","name_without_path":"Define33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396605","object_id":"column-396605","name":"Define34","name_without_path":"Define34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396606","object_id":"column-396606","name":"Define35","name_without_path":"Define35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396607","object_id":"column-396607","name":"Define36","name_without_path":"Define36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396608","object_id":"column-396608","name":"Define37","name_without_path":"Define37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396609","object_id":"column-396609","name":"ProcQty","name_without_path":"ProcQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396610","object_id":"column-396610","name":"CopyDemandId","name_without_path":"CopyDemandId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396611","object_id":"column-396611","name":"OrgDemQty","name_without_path":"OrgDemQty","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396612","object_id":"column-396612","name":"OrgDemType","name_without_path":"OrgDemType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396613","object_id":"column-396613","name":"OrgDemDId","name_without_path":"OrgDemDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396614","object_id":"column-396614","name":"OrgDemCode","name_without_path":"OrgDemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396615","object_id":"column-396615","name":"OrgDemSeq","name_without_path":"OrgDemSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396616","object_id":"column-396616","name":"planlotnumber","name_without_path":"planlotnumber","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396617","object_id":"column-396617","name":"PlanType","name_without_path":"PlanType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396618","object_id":"column-396618","name":"status","name_without_path":"status","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396619","object_id":"column-396619","name":"FactoryCode","name_without_path":"FactoryCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396620","object_id":"column-396620","name":"FactoryName","name_without_path":"FactoryName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396621","object_id":"column-396621","name":"Rscdate","name_without_path":"Rscdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-396622","object_id":"column-396622","name":"PurEmplCode","name_without_path":"PurEmplCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};