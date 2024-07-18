window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12687","name":"v_bom_detail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_bom_detail --opdesc,DPartAttr,DQty,DAuxQty鏈€鍚庡鐞?\r\nAs\r\nselect c.SortSeq as DSortSeq, c.OpSeq as DOpSeq,bp.invcode as DInvCode, i.cinvname as DInvName, i.cinvstd as DInvStd,i.cEnglishName as DEnglishName , \r\nu.ccomunitname as DInvUnitName,bp.cBasEngineerFigNo as DBasEngineerFigNo,c.BaseQtyN as DBaseQtyN,c.BaseQtyD as DBaseQtyD,c.CompScrap as DCompScrap,\r\nc.AuxUnitCode as DAuxUnitCode,aux.ccomunitname as DAuxUnitName,c.ChangeRate as DChangeRate,c.AuxBaseQtyN as DAuxBaseQtyN,\r\ni.cInvAddCode as DInvAddCode,c.FVFlag as DFVFlag,o.WIPType as DWIPType,c.EffBegDate as DEffBegDate,\r\nc.EffEndDate as DEffEndDate,o.Offset as DOffset,o.planfactor as DPlanRate,c.producttype as DProductType,c.ByproductFlag as DByproductFlag,\r\no.AccuCostFlag as DAccuCostFlag,o.CostWIPRel as DCostWIPRel,o.OptionalFlag as DOptionalFlag,o.MutexRule as DMutexRule,o.WhCode as DWhCode,\r\nw.cWhName as DWhName,o.DrawDeptCode as DDeptCode,d.cDepName as DDeptName,c.Remark as DRemark,\r\ni.cComUnitCode as DInvUnit, c.free1 as DInvFree_1, c.free2 as DInvFree_2, c.free3 as DInvFree_3, c.free4 as DInvFree_4, c.free5 as DInvFree_5, \r\nc.free6 as DInvFree_6, c.free7 as DInvFree_7, c.free8 as DInvFree_8, c.free9 as DInvFree_9, c.free10 as DInvFree_10,\r\nc.define22 as DDefine_22,c.define23 as DDefine_23,c.define24 as DDefine_24,c.define25 as DDefine_25,c.define26 as DDefine_26,c.define27 as DDefine_27,\r\nc.define28 as DDefine_28,c.define29 as DDefine_29,c.define30 as DDefine_30,c.define31 as DDefine_31,c.define32 as DDefine_32,c.define33 as DDefine_33,\r\nc.define34 as DDefine_34,c.define35 as DDefine_35,c.define36 as DDefine_36,c.define37 as DDefine_37,i.cInvDefine1 as DInvDefine_1,\r\ni.cInvDefine2 as DInvDefine_2, i.cInvDefine3 as DInvDefine_3,i.cInvDefine4 as DInvDefine_4,i.cInvDefine5 as DInvDefine_5,\r\ni.cInvDefine6 as DInvDefine_6,i.cInvDefine7 as DInvDefine_7,i.cInvDefine8 as DInvDefine_8,i.cInvDefine9 as DInvDefine_9,\r\ni.cInvDefine10 as DInvDefine_10,i.cInvDefine11 as DInvDefine_11,i.cInvDefine12 as DInvDefine_12,i.cInvDefine13 as DInvDefine_13,\r\ni.cInvDefine14 as DInvDefine_14,i.cInvDefine15 as DInvDefine_15,i.cInvDefine16 as DInvDefine_16,c.opcomponentid,c.bomid as bomid \r\n,ord.AutoId,DSubFlag =  case when cs.ComponentSubId > 0 then '*' else '' end,DCompScrapFlag = case when cs1.OpComponentId > 0 then '*' else '' end,\r\nCOALESCE(pd.description,'') as DOpDesc,v.invattr as DPartAttr,o.FeatureRel as DFeatureRel,s.bProduceByFeatureAllocate as DProduceByFeatureAllocate,\r\nDAuxQty =( case when c.FVFlag = 0 then c.AuxBaseQtyN / c.BaseQtyD * (1 + c.CompScrap / 100)   \r\n    when  c.FVFlag = 1 then c.AuxBaseQtyN / c.BaseQtyD * (1 + c.CompScrap / 100) /(1-bom_parent.parentscrap/100)\tend),\r\nDQty = ((case when c.AuxUnitCode is null or s.iBOMExpandUnitType = 1 then c.BaseQtyN else c.AuxBaseQtyN * c.Changerate end)/c.BaseQtyD * ( 1 + c.CompScrap/100) / case when c.FVFlag = 1 then (1 - bom_parent.ParentScrap/100) else 1 end *  o.PlanFactor /100 ),\r\nc.bProcessMaterial as DrocessMaterial\r\n     \r\n\r\nfrom bom_opcomponent c\r\ninner join bom_bom on bom_bom.bomid= c.bomid\r\ninner join bom_parent on bom_parent.bomid = c.bomid\r\ninner join bas_part bp on bp.partid = c.componentid\r\ninner join inventory i on i.cinvcode=bp.invcode\r\ninner join Inventory_Sub s on i.cinvcode = s.cinvsubcode\r\ninner join ComputationUnit u on u.cComunitCode = i.cComUnitCode\r\ninner join bom_opcomponentopt o on o.optionsid = c.optionsid\r\nleft outer join bom_opcomponentsub  cs on cs.opcomponentid = c.opcomponentid and cs.ComponentSubId = (select min(ComponentSubId) from bom_opcomponentsub where OpComponentId = c.OpComponentId) \r\nleft outer join bom_opcomponentscrap cs1 on cs1.OpComponentId = c.OpComponentId and cs1.toqty = 999999999999999999999.999999 \r\nleft outer join ComputationUnit aux on aux.cComunitCode = i.ccaComUnitCode\r\nLEFT OUTER JOIN Warehouse w on w.cWhCode = o.WhCode  \r\nleft outer join v_bas_inventory v on v.invcode = i.cinvcode\r\nLEFT OUTER JOIN Department d on d.cDepCode = o.drawDeptCode\r\nleft outer join bom_orderbom ord on bom_bom.bomid= ord.bomid and bom_bom.BomType=3\r\nleft outer join v_bomroutingmap vm on vm.bomid = c.BomId\r\nleft outer join sfc_proutingdetail pd on c.opseq = pd.opseq and pd.PRoutingId = vm.PRoutingId\r\n--left outer join sfc_proutingdetail pd on c.opseq = pd.opseq and (pd.proutingid = (select top 1 ph.PRoutingId \r\n--\tFROM sfc_prouting ph, sfc_proutingpart pp             \r\n--\tWHERE ph.PRoutingId = pp.PRoutingId and ph.status = 3 and (ph.rountingtype = 1 and bom_bom.bomtype=1 and \r\n--    pp.PartId = bom_parent.parentid AND bom_bom.versioneffdate >= ph.VersionEffDate and  bom_bom.versioneffdate <= ph.VersionEndDate) \r\n--or (ph.rountingtype = 2 and bom_bom.bomtype=2 and pp.PartId = bom_parent.parentid and bom_bom.identcode = ph.identcode)\r\n--order by ph.VersionEffDate desc))","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_bom_detail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-316915","object_id":"column-316915","name":"DSortSeq","name_without_path":"DSortSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316916","object_id":"column-316916","name":"DOpSeq","name_without_path":"DOpSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316917","object_id":"column-316917","name":"DInvCode","name_without_path":"DInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316918","object_id":"column-316918","name":"DInvName","name_without_path":"DInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316919","object_id":"column-316919","name":"DInvStd","name_without_path":"DInvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316920","object_id":"column-316920","name":"DEnglishName","name_without_path":"DEnglishName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316921","object_id":"column-316921","name":"DInvUnitName","name_without_path":"DInvUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316922","object_id":"column-316922","name":"DBasEngineerFigNo","name_without_path":"DBasEngineerFigNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316923","object_id":"column-316923","name":"DBaseQtyN","name_without_path":"DBaseQtyN","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316924","object_id":"column-316924","name":"DBaseQtyD","name_without_path":"DBaseQtyD","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316925","object_id":"column-316925","name":"DCompScrap","name_without_path":"DCompScrap","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_Rate: decimal","data_length":"6, 3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316926","object_id":"column-316926","name":"DAuxUnitCode","name_without_path":"DAuxUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316927","object_id":"column-316927","name":"DAuxUnitName","name_without_path":"DAuxUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316928","object_id":"column-316928","name":"DChangeRate","name_without_path":"DChangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_ChangeRate: decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316929","object_id":"column-316929","name":"DAuxBaseQtyN","name_without_path":"DAuxBaseQtyN","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_QTY: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316930","object_id":"column-316930","name":"DInvAddCode","name_without_path":"DInvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316931","object_id":"column-316931","name":"DFVFlag","name_without_path":"DFVFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316932","object_id":"column-316932","name":"DWIPType","name_without_path":"DWIPType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316933","object_id":"column-316933","name":"DEffBegDate","name_without_path":"DEffBegDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316934","object_id":"column-316934","name":"DEffEndDate","name_without_path":"DEffEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316935","object_id":"column-316935","name":"DOffset","name_without_path":"DOffset","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316936","object_id":"column-316936","name":"DPlanRate","name_without_path":"DPlanRate","description":null,"is_pk":false,"is_identity":false,"data_type":"Udt_Rate100: decimal","data_length":"6, 3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316937","object_id":"column-316937","name":"DProductType","name_without_path":"DProductType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316938","object_id":"column-316938","name":"DByproductFlag","name_without_path":"DByproductFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316939","object_id":"column-316939","name":"DAccuCostFlag","name_without_path":"DAccuCostFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316940","object_id":"column-316940","name":"DCostWIPRel","name_without_path":"DCostWIPRel","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316941","object_id":"column-316941","name":"DOptionalFlag","name_without_path":"DOptionalFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316942","object_id":"column-316942","name":"DMutexRule","name_without_path":"DMutexRule","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316943","object_id":"column-316943","name":"DWhCode","name_without_path":"DWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316944","object_id":"column-316944","name":"DWhName","name_without_path":"DWhName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316945","object_id":"column-316945","name":"DDeptCode","name_without_path":"DDeptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316946","object_id":"column-316946","name":"DDeptName","name_without_path":"DDeptName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316947","object_id":"column-316947","name":"DRemark","name_without_path":"DRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316948","object_id":"column-316948","name":"DInvUnit","name_without_path":"DInvUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316949","object_id":"column-316949","name":"DInvFree_1","name_without_path":"DInvFree_1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316950","object_id":"column-316950","name":"DInvFree_2","name_without_path":"DInvFree_2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316951","object_id":"column-316951","name":"DInvFree_3","name_without_path":"DInvFree_3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316952","object_id":"column-316952","name":"DInvFree_4","name_without_path":"DInvFree_4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316953","object_id":"column-316953","name":"DInvFree_5","name_without_path":"DInvFree_5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316954","object_id":"column-316954","name":"DInvFree_6","name_without_path":"DInvFree_6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316955","object_id":"column-316955","name":"DInvFree_7","name_without_path":"DInvFree_7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316956","object_id":"column-316956","name":"DInvFree_8","name_without_path":"DInvFree_8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316957","object_id":"column-316957","name":"DInvFree_9","name_without_path":"DInvFree_9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316958","object_id":"column-316958","name":"DInvFree_10","name_without_path":"DInvFree_10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316959","object_id":"column-316959","name":"DDefine_22","name_without_path":"DDefine_22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316960","object_id":"column-316960","name":"DDefine_23","name_without_path":"DDefine_23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316961","object_id":"column-316961","name":"DDefine_24","name_without_path":"DDefine_24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316962","object_id":"column-316962","name":"DDefine_25","name_without_path":"DDefine_25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316963","object_id":"column-316963","name":"DDefine_26","name_without_path":"DDefine_26","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316964","object_id":"column-316964","name":"DDefine_27","name_without_path":"DDefine_27","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316965","object_id":"column-316965","name":"DDefine_28","name_without_path":"DDefine_28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316966","object_id":"column-316966","name":"DDefine_29","name_without_path":"DDefine_29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316967","object_id":"column-316967","name":"DDefine_30","name_without_path":"DDefine_30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316968","object_id":"column-316968","name":"DDefine_31","name_without_path":"DDefine_31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316969","object_id":"column-316969","name":"DDefine_32","name_without_path":"DDefine_32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316970","object_id":"column-316970","name":"DDefine_33","name_without_path":"DDefine_33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316971","object_id":"column-316971","name":"DDefine_34","name_without_path":"DDefine_34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316972","object_id":"column-316972","name":"DDefine_35","name_without_path":"DDefine_35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316973","object_id":"column-316973","name":"DDefine_36","name_without_path":"DDefine_36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316974","object_id":"column-316974","name":"DDefine_37","name_without_path":"DDefine_37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316975","object_id":"column-316975","name":"DInvDefine_1","name_without_path":"DInvDefine_1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316976","object_id":"column-316976","name":"DInvDefine_2","name_without_path":"DInvDefine_2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316977","object_id":"column-316977","name":"DInvDefine_3","name_without_path":"DInvDefine_3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316978","object_id":"column-316978","name":"DInvDefine_4","name_without_path":"DInvDefine_4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316979","object_id":"column-316979","name":"DInvDefine_5","name_without_path":"DInvDefine_5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316980","object_id":"column-316980","name":"DInvDefine_6","name_without_path":"DInvDefine_6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316981","object_id":"column-316981","name":"DInvDefine_7","name_without_path":"DInvDefine_7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316982","object_id":"column-316982","name":"DInvDefine_8","name_without_path":"DInvDefine_8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316983","object_id":"column-316983","name":"DInvDefine_9","name_without_path":"DInvDefine_9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316984","object_id":"column-316984","name":"DInvDefine_10","name_without_path":"DInvDefine_10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316985","object_id":"column-316985","name":"DInvDefine_11","name_without_path":"DInvDefine_11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316986","object_id":"column-316986","name":"DInvDefine_12","name_without_path":"DInvDefine_12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316987","object_id":"column-316987","name":"DInvDefine_13","name_without_path":"DInvDefine_13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316988","object_id":"column-316988","name":"DInvDefine_14","name_without_path":"DInvDefine_14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316989","object_id":"column-316989","name":"DInvDefine_15","name_without_path":"DInvDefine_15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316990","object_id":"column-316990","name":"DInvDefine_16","name_without_path":"DInvDefine_16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316991","object_id":"column-316991","name":"opcomponentid","name_without_path":"opcomponentid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316992","object_id":"column-316992","name":"bomid","name_without_path":"bomid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316993","object_id":"column-316993","name":"AutoId","name_without_path":"AutoId","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316994","object_id":"column-316994","name":"DSubFlag","name_without_path":"DSubFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316995","object_id":"column-316995","name":"DCompScrapFlag","name_without_path":"DCompScrapFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316996","object_id":"column-316996","name":"DOpDesc","name_without_path":"DOpDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316997","object_id":"column-316997","name":"DPartAttr","name_without_path":"DPartAttr","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316998","object_id":"column-316998","name":"DFeatureRel","name_without_path":"DFeatureRel","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-316999","object_id":"column-316999","name":"DProduceByFeatureAllocate","name_without_path":"DProduceByFeatureAllocate","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-317000","object_id":"column-317000","name":"DAuxQty","name_without_path":"DAuxQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-317001","object_id":"column-317001","name":"DQty","name_without_path":"DQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-317002","object_id":"column-317002","name":"DrocessMaterial","name_without_path":"DrocessMaterial","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};