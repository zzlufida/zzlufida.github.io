window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13840","name":"v_SA_PELockedSum","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_SA_PELockedSum   \r\nas  \r\n    select cur.ItemId,convert(nvarchar(2), '') As SelCol,Cur.AutoID, Cur.cWhCode, Cur.cInvCode,   \r\n  Inv.cInvAddCode,Inv.cInvName,Inv.cInvStd,com1.ccomunitcode as cComUnitCode,com1.cComUnitName as cinvm_unit,  \r\n  com2.ccomunitcode as cassunit,com2.cComUnitName as cinva_unit,    \r\n  isnull(Cur.iQuantity,0) as fcurqty,--现存数量  \r\n  (case when Inv.igrouptype=1 then Cur.iQuantity/com2.iChangRate else  (case when Inv.igrouptype=0 then null else Cur.inum end) end ) as fcurNum, --现存件数  \r\n  convert(decimal(38,6) ,isnull(Cur.iQuantity,0)) as iquantity ,--可预留数量   \r\n                (case when Inv.igrouptype=1 then Cur.iQuantity/com2.iChangRate else  (case when Inv.igrouptype=0 then null else Cur.inum end) end ) as inum  ,--可预留件数  \r\n            --convert(decimal(38,6),isnull(Cur.inum,0)) as inum  ,--可预留件数  \r\n  Cur.cFree1, Cur.cFree2, Cur.cFree3, Cur.cFree4, Cur.cFree5, Cur.cFree6, Cur.cFree7, Cur.cFree8, Cur.cFree9, Cur.cFree10,    \r\n  Cur.cBatch, Cur.dVDate, Cur.dMdate,   \r\n  convert(nchar,convert(money,Cur.ufts),2) as ufts,Cur.iMassDate, Cur.cMassUnit,  \r\n  E.enumname as cMassUnitName,     \r\n  Cur.iSoType,isnull(Cur.iSodid,'') as isodid,WH.cWhName,  \r\n  (case when cur.isotype =1 then SOD.cSOCode when cur.isotype = 3 then ex.ccode  when cur.isotype =7  then mom_order.mocode when cur.isotype = 8 then om_momain.ccode else  isnull(cur.isodid,'' ) end ) as csocode,   \r\n  (case when cur.isotype=1 then SOD.iRowNo when cur.isotype =3 then EXD.iRowNo when cur.isotype = 7  then mom_orderdetail.sortseq when cur.isotype = 8 then om_modetails.ivouchrowno  else null end) as isoseq,  \r\n    \r\n                (case when Inv.igrouptype=1 then com2.iChangRate else   (case when Inv.igrouptype=0 then null  else   \r\n                    (case when convert(decimal(38,6),isnull(Cur.iQuantity,0)) = 0   \r\n                              or convert(decimal(38,6),isnull(Cur.inum,0)) = 0   \r\n                      then null  else (isnull(Cur.iQuantity,0)) / (isnull(Cur.inum,0)) end) end)    \r\n    end ) as iinvexchrate, --换算率,带到界面  \r\n  \r\n  (case when Inv.igrouptype=1 then com2.iChangRate else     \r\n   (case when Inv.igrouptype=0 then null  else (case when convert(decimal(38,6),isnull(Cur.iQuantity,0)) = 0 or convert(decimal(38,6),isnull(Cur.inum,0)) = 0   \r\n              then null  else isnull(Cur.iQuantity,0)/isnull(Cur.inum,0) end) end)    \r\n    end ) as iinvexchrate1,     \r\n  Inv.cInvDefine1,Inv.cInvDefine2,Inv.cInvDefine3,Inv.cInvDefine4,Inv.cInvDefine5,    \r\n  Inv.cInvDefine6,Inv.cInvDefine7,Inv.cInvDefine8,Inv.cInvDefine9,Inv.cInvDefine10,Inv.cInvDefine11,    \r\n  Inv.cInvDefine12,Inv.cInvDefine13,Inv.cInvDefine14,Inv.cInvDefine15,Inv.cInvDefine16,     \r\n  Inv.iVolume,Inv.fGrossW,Inv.iInvWeight,Inv.cInvCCode,Inv.iID,Inv.btrack,Inv.igrouptype,Inv.cSRPolicy,  \r\n  Cur.cVmiVenCode,Ven.cVenAbbName as cVmiVenName,\r\n  cur.iexpiratdatecalcu, cur.cexpirationdate, cur.dexpirationdate,  \r\n                E1.enumname  ,ven.iid as viid     \r\n from ST_PELockedSum  Cur with (nolock)   \r\n  left join SO_SODetails SOD with (nolock)  on   \r\n   cur.iSoType=1 and case when cur.iSoType<>1 then '0' else  Cur.iSodid end=SOD.iSOsID  \r\n  left join EX_ORDERDetail EXD with (nolock)  on   \r\n   cur.iSoType=3 and case when cur.iSoType<>3 then '0' else  Cur.iSodid end=EXD.autoid  \r\n  left join EX_ORDER EX with (nolock)  On EXD.ID=EX.ID   \r\n                  \r\n  left join mom_moallocate with (nolock) on  cur.isotype = 7 and   \r\n   case when cur.iSoType<>7 then '0' else  Cur.iSodid end = mom_moallocate.allocateid  \r\n                left join mom_orderdetail with (nolock) on mom_orderdetail.modid =  mom_moallocate.modid  \r\n                left join mom_order with (nolock) on mom_orderdetail.moid  =mom_order.moid  \r\n                 \r\n  \r\n                left join OM_MOMaterials with (nolock) on cur.isotype =8  and   \r\n   case when cur.iSoType<>8 then '0' else  Cur.iSodid end =OM_MOMaterials.MOMaterialsID  \r\n                 \r\n  left join om_momain with (nolock) on  OM_MOMaterials.MOID = om_momain.moid   \r\n                left join om_modetails  with (nolock) on  om_modetails.modetailsid =OM_MOMaterials.modetailsid  \r\n    \r\n  \r\n                Left Join Inventory Inv with (nolock)  On Cur.cInvCode=Inv.cInvCode    \r\n  left join computationunit com1 with (nolock)  on Inv.ccomunitcode = com1.ccomunitcode    \r\n  left join computationunit com2 with (nolock) on Inv.cSTComUnitCode = com2.ccomunitcode    \r\n  Left Join WareHouse WH with (nolock) On Cur.cWhCode=Wh.cWhCode    \r\n  Left Join Vendor Ven with (nolock) On Cur.cVmiVenCode=Ven.cVenCode    \r\n  left join AA_RequirementClass AA with (nolock)  on AA.cRClassCode = Cur.isodid and Cur.isotype =4    \r\n  left join v_aa_enum E with (nolock) on Cur.cMassUnit=E.enumcode and E.EnumType='ST.MassUnit'    \r\n  left join v_aa_enum E1 on E1.enumcode=cur.isotype and E1.enumtype=N'ST.Sotype'    \r\n                where inv.csrpolicy =N'pe'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_SA_PELockedSum"},{"field":"Type","value":"View"}],"columns":[{"id":"column-402705","object_id":"column-402705","name":"ItemId","name_without_path":"ItemId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402706","object_id":"column-402706","name":"SelCol","name_without_path":"SelCol","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402707","object_id":"column-402707","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402708","object_id":"column-402708","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402709","object_id":"column-402709","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402710","object_id":"column-402710","name":"cInvAddCode","name_without_path":"cInvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402711","object_id":"column-402711","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402712","object_id":"column-402712","name":"cInvStd","name_without_path":"cInvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402713","object_id":"column-402713","name":"cComUnitCode","name_without_path":"cComUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402714","object_id":"column-402714","name":"cinvm_unit","name_without_path":"cinvm_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402715","object_id":"column-402715","name":"cassunit","name_without_path":"cassunit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402716","object_id":"column-402716","name":"cinva_unit","name_without_path":"cinva_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402717","object_id":"column-402717","name":"fcurqty","name_without_path":"fcurqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402718","object_id":"column-402718","name":"fcurNum","name_without_path":"fcurNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402719","object_id":"column-402719","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402720","object_id":"column-402720","name":"inum","name_without_path":"inum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402721","object_id":"column-402721","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402722","object_id":"column-402722","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402723","object_id":"column-402723","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402724","object_id":"column-402724","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402725","object_id":"column-402725","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402726","object_id":"column-402726","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402727","object_id":"column-402727","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402728","object_id":"column-402728","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402729","object_id":"column-402729","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402730","object_id":"column-402730","name":"cFree10","name_without_path":"cFree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402731","object_id":"column-402731","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402732","object_id":"column-402732","name":"dVDate","name_without_path":"dVDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402733","object_id":"column-402733","name":"dMdate","name_without_path":"dMdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402734","object_id":"column-402734","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402735","object_id":"column-402735","name":"iMassDate","name_without_path":"iMassDate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402736","object_id":"column-402736","name":"cMassUnit","name_without_path":"cMassUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402737","object_id":"column-402737","name":"cMassUnitName","name_without_path":"cMassUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402738","object_id":"column-402738","name":"iSoType","name_without_path":"iSoType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402739","object_id":"column-402739","name":"isodid","name_without_path":"isodid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402740","object_id":"column-402740","name":"cWhName","name_without_path":"cWhName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402741","object_id":"column-402741","name":"csocode","name_without_path":"csocode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402742","object_id":"column-402742","name":"isoseq","name_without_path":"isoseq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402743","object_id":"column-402743","name":"iinvexchrate","name_without_path":"iinvexchrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402744","object_id":"column-402744","name":"iinvexchrate1","name_without_path":"iinvexchrate1","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402745","object_id":"column-402745","name":"cInvDefine1","name_without_path":"cInvDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402746","object_id":"column-402746","name":"cInvDefine2","name_without_path":"cInvDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402747","object_id":"column-402747","name":"cInvDefine3","name_without_path":"cInvDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402748","object_id":"column-402748","name":"cInvDefine4","name_without_path":"cInvDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402749","object_id":"column-402749","name":"cInvDefine5","name_without_path":"cInvDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402750","object_id":"column-402750","name":"cInvDefine6","name_without_path":"cInvDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402751","object_id":"column-402751","name":"cInvDefine7","name_without_path":"cInvDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402752","object_id":"column-402752","name":"cInvDefine8","name_without_path":"cInvDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402753","object_id":"column-402753","name":"cInvDefine9","name_without_path":"cInvDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402754","object_id":"column-402754","name":"cInvDefine10","name_without_path":"cInvDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402755","object_id":"column-402755","name":"cInvDefine11","name_without_path":"cInvDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402756","object_id":"column-402756","name":"cInvDefine12","name_without_path":"cInvDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402757","object_id":"column-402757","name":"cInvDefine13","name_without_path":"cInvDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402758","object_id":"column-402758","name":"cInvDefine14","name_without_path":"cInvDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402759","object_id":"column-402759","name":"cInvDefine15","name_without_path":"cInvDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402760","object_id":"column-402760","name":"cInvDefine16","name_without_path":"cInvDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402761","object_id":"column-402761","name":"iVolume","name_without_path":"iVolume","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402762","object_id":"column-402762","name":"fGrossW","name_without_path":"fGrossW","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402763","object_id":"column-402763","name":"iInvWeight","name_without_path":"iInvWeight","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402764","object_id":"column-402764","name":"cInvCCode","name_without_path":"cInvCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402765","object_id":"column-402765","name":"iID","name_without_path":"iID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402766","object_id":"column-402766","name":"btrack","name_without_path":"btrack","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402767","object_id":"column-402767","name":"igrouptype","name_without_path":"igrouptype","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402768","object_id":"column-402768","name":"cSRPolicy","name_without_path":"cSRPolicy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402769","object_id":"column-402769","name":"cVmiVenCode","name_without_path":"cVmiVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402770","object_id":"column-402770","name":"cVmiVenName","name_without_path":"cVmiVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402771","object_id":"column-402771","name":"iexpiratdatecalcu","name_without_path":"iexpiratdatecalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402772","object_id":"column-402772","name":"cexpirationdate","name_without_path":"cexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402773","object_id":"column-402773","name":"dexpirationdate","name_without_path":"dexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402774","object_id":"column-402774","name":"enumname","name_without_path":"enumname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-402775","object_id":"column-402775","name":"viid","name_without_path":"viid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};