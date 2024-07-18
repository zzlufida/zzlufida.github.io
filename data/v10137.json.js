window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10137","name":"Caq_RealCostBomHead","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  view Caq_RealCostBomHead\r\nas\r\n\r\nselect distinct NULL as Pcoid,NULL as Parent,cVerID=A.cverid,Ver.cVerName,Cppid=A.pcoid,PartID=A.parent,\r\n InvCode = v.InvCode,InvName = v.InvName,InvAddCode = v.InvAddCode,InvStd = v.InvStd,\r\n       UnitName = v.ComUnitName,\r\n       InvAttr = enum.enumname,\r\n       LeadTime = v.LeadTime,InvFree_1=p.Free1,InvFree_2=p.Free2,\r\n       InvFree_3=p.Free3,InvFree_4=p.Free4,InvFree_5=p.Free5,  InvFree_6=p.Free6,InvFree_7=p.Free7,\r\n       InvFree_8=p.Free8,InvFree_9=p.Free9,InvFree_10=p.Free10,  InvDefine_1=v.InvDefine1,\r\n       InvDefine_2=v.InvDefine2,InvDefine_3=v.InvDefine3,InvDefine_4=v.InvDefine4,\r\n       InvDefine_5=v.InvDefine5,InvDefine_6=v.InvDefine6,InvDefine_7=v.InvDefine7,\r\n       InvDefine_8=v.InvDefine8,  InvDefine_9=v.InvDefine9,InvDefine_10=v.InvDefine10,\r\n       InvDefine_11=v.InvDefine11,InvDefine_12=v.InvDefine12, InvDefine_13=v.InvDefine13,\r\n       InvDefine_14=v.InvDefine14,InvDefine_15=v.InvDefine15,InvDefine_16=v.InvDefine16\r\n       ,1.0 as Quan, MatAmo as InvCost,\r\n       case when v.InvAttr<>2 then LabQua else null end as LaborWh,case when v.InvAttr<>2 then LabAmo else null end as LaborCost,  --纯委外只有材料费和加工费\r\n       case when v.InvAttr<>2 then AssQua  else null end as cAssWh,case when v.InvAttr<>2 then AssAmo else null end as cAssCost,\r\n       case when v.InvAttr<>2 then ManuQua else null end as ManuWh,case when v.InvAttr<>2 then ManuAmo else null end as ManuCost,\r\n       case when v.InvAttr<>2 then OtherAmo else OutsourAmo end as OtherCost,SemiAmo as SemiCost,\r\n       case when v.InvAttr<>2 then (MatAmo+LabAmo+AssAmo+ManuAmo+OtherAmo+SemiAmo) else (MatAmo+OutsourAmo+SemiAmo ) end as UnitCost,\r\n       case when v.InvAttr<>2 then (MatAmo+LabAmo+AssAmo+ManuAmo+OtherAmo+SemiAmo) else (MatAmo+OutsourAmo+SemiAmo ) end as TotalCost\r\n\r\n       from\r\n  (\r\n        select C.iplancoid as pcoid,C.ipartid as parent,awc.cVerid,\r\n        sum(case when awc.camotype=0 then awc.iqua else 0 end) MatQua,sum(case when awc.camotype=0 then awc.iqua*ca_invprice.iInvRCost else 0 end) MatAmo,\r\n        sum(case when awc.camotype=1 then awc.iqua else 0 end) LabQua, sum(case when awc.camotype=1 then (case isnull(E.iDirMethod,1) when 1 then isnull(F.iPlanMauAmoRat,0) when 2 then  isnull(F.iPlanMauAmoRat,0) when 3 then  isnull(G.iPlanMauAmoRat,0) else 0 end) * awc.iQua else 0 end) as LabAmo,\r\n        sum(case when awc.camotype=2 then awc.iqua else 0 end) AssQua,sum(case when awc.camotype=2 then awc.iqua*ass.iplanprice else 0 end) AssAmo,\r\n        sum(case when awc.camotype=3 then awc.iqua else 0 end) ManuQua,sum(case when awc.camotype=3 then isnull(F2.iPlanMauAmoRat,0) * Awc.iQua else 0 end) ManuAmo,\r\n        sum(case when awc.camotype=4 then awc.iqua else 0 end) OtherQua,sum(case when awc.camotype=4 then Awc.iAmo else 0 end) OtherAmo,\r\n        sum(case when awc.camotype=6 then awc.iqua else 0 end) OutsourQua,sum(case when awc.camotype=6 then Awc.iAmo else 0 end) OutsourAmo,\r\n        sum(case when awc.camotype=5 then awc.iqua else 0 end) SemiQua,sum(case when awc.camotype=5 then Awc.iqua*pc.ipdtunitamo else 0 end) SemiAmo\r\n        --,*\r\n        from Ca_COPlan C\r\n         inner join ca_awpc awc on awc.cppid=C.iplancoid\r\n         left join ca_invprice on awc.cAmoID =ca_invprice.ipartid and awc.cVerID=ca_invprice.cVerID and awc.camotype=0   --材料费\r\n         left join Ca_PerCostMode E on Awc.cVerID=E.cVerID     --人工费\r\n         left join CA_DepPMA F on F.cdeptid = c.cdeptid and Awc.cVerID=F.cVerID and Awc.cAmoType=F.cAmoType and Awc.cAmoType=1   --人工费\r\n         left join CA_ProPMA G on Awc.camoid = G.cProcedureID and Awc.cVerID=G.cVerID  and awc.camotype=1 --人工费\r\n         left join CA_DepPMA F2 on F2.cdeptid = c.cdeptid and Awc.cVerID=F2.cVerID and Awc.cAmoType=F2.cAmoType and Awc.cAmoID=F2.cAmoID and Awc.cAmoType=3   --制造费\r\n         left join ca_assmp ass on awc.cAmoID=ass.cAuxAmoID and awc.cVerID=ass.cVerID  and awc.camotype=2    --辅助费用\r\n         left Join (select cppid,cverid,sum(ipdtunitamo) as ipdtunitamo from ca_planc group by cppid,cverid) pc on pc.cVerid=awc.cverid and awc.camoid=cast(pc.cppid as nvarchar(40)) and awc.camotype=5 and awc.iqua<>0\r\n  group by C.iplancoid,C.ipartid,awc.cVerid\r\n )A\r\n left join ca_version Ver on A.cverid=ver.cverid\r\n inner join caq_baspart P on P.partid=A.parent\r\n inner join v_bas_inventory V on V.InvCode=P.invcode\r\n left  join v_aa_enum enum on enum.enumtype='MM.PartType'  and  enum.enumcode=v.InvAttr","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Caq_RealCostBomHead"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174394","object_id":"column-174394","name":"Pcoid","name_without_path":"Pcoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174395","object_id":"column-174395","name":"Parent","name_without_path":"Parent","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174396","object_id":"column-174396","name":"cVerID","name_without_path":"cVerID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174397","object_id":"column-174397","name":"cVerName","name_without_path":"cVerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174398","object_id":"column-174398","name":"Cppid","name_without_path":"Cppid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174399","object_id":"column-174399","name":"PartID","name_without_path":"PartID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174400","object_id":"column-174400","name":"InvCode","name_without_path":"InvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174401","object_id":"column-174401","name":"InvName","name_without_path":"InvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174402","object_id":"column-174402","name":"InvAddCode","name_without_path":"InvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174403","object_id":"column-174403","name":"InvStd","name_without_path":"InvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174404","object_id":"column-174404","name":"UnitName","name_without_path":"UnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174405","object_id":"column-174405","name":"InvAttr","name_without_path":"InvAttr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174406","object_id":"column-174406","name":"LeadTime","name_without_path":"LeadTime","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174407","object_id":"column-174407","name":"InvFree_1","name_without_path":"InvFree_1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174408","object_id":"column-174408","name":"InvFree_2","name_without_path":"InvFree_2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174409","object_id":"column-174409","name":"InvFree_3","name_without_path":"InvFree_3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174410","object_id":"column-174410","name":"InvFree_4","name_without_path":"InvFree_4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174411","object_id":"column-174411","name":"InvFree_5","name_without_path":"InvFree_5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174412","object_id":"column-174412","name":"InvFree_6","name_without_path":"InvFree_6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174413","object_id":"column-174413","name":"InvFree_7","name_without_path":"InvFree_7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174414","object_id":"column-174414","name":"InvFree_8","name_without_path":"InvFree_8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174415","object_id":"column-174415","name":"InvFree_9","name_without_path":"InvFree_9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174416","object_id":"column-174416","name":"InvFree_10","name_without_path":"InvFree_10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174417","object_id":"column-174417","name":"InvDefine_1","name_without_path":"InvDefine_1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174418","object_id":"column-174418","name":"InvDefine_2","name_without_path":"InvDefine_2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174419","object_id":"column-174419","name":"InvDefine_3","name_without_path":"InvDefine_3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174420","object_id":"column-174420","name":"InvDefine_4","name_without_path":"InvDefine_4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174421","object_id":"column-174421","name":"InvDefine_5","name_without_path":"InvDefine_5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174422","object_id":"column-174422","name":"InvDefine_6","name_without_path":"InvDefine_6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174423","object_id":"column-174423","name":"InvDefine_7","name_without_path":"InvDefine_7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174424","object_id":"column-174424","name":"InvDefine_8","name_without_path":"InvDefine_8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174425","object_id":"column-174425","name":"InvDefine_9","name_without_path":"InvDefine_9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174426","object_id":"column-174426","name":"InvDefine_10","name_without_path":"InvDefine_10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174427","object_id":"column-174427","name":"InvDefine_11","name_without_path":"InvDefine_11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174428","object_id":"column-174428","name":"InvDefine_12","name_without_path":"InvDefine_12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174429","object_id":"column-174429","name":"InvDefine_13","name_without_path":"InvDefine_13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174430","object_id":"column-174430","name":"InvDefine_14","name_without_path":"InvDefine_14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174431","object_id":"column-174431","name":"InvDefine_15","name_without_path":"InvDefine_15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174432","object_id":"column-174432","name":"InvDefine_16","name_without_path":"InvDefine_16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174433","object_id":"column-174433","name":"Quan","name_without_path":"Quan","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"2, 1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174434","object_id":"column-174434","name":"InvCost","name_without_path":"InvCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174435","object_id":"column-174435","name":"LaborWh","name_without_path":"LaborWh","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174436","object_id":"column-174436","name":"LaborCost","name_without_path":"LaborCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174437","object_id":"column-174437","name":"cAssWh","name_without_path":"cAssWh","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174438","object_id":"column-174438","name":"cAssCost","name_without_path":"cAssCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174439","object_id":"column-174439","name":"ManuWh","name_without_path":"ManuWh","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174440","object_id":"column-174440","name":"ManuCost","name_without_path":"ManuCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174441","object_id":"column-174441","name":"OtherCost","name_without_path":"OtherCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174442","object_id":"column-174442","name":"SemiCost","name_without_path":"SemiCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174443","object_id":"column-174443","name":"UnitCost","name_without_path":"UnitCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174444","object_id":"column-174444","name":"TotalCost","name_without_path":"TotalCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};