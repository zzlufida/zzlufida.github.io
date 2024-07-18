window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11642","name":"leafIsnQty","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  view leafIsnQty    \r\nas    \r\nselect sum(isnqty) as isnQty,sodid,leafpartid,sotype,bomid     \r\nfrom (    \r\nselect (moa.qty-moa.IssQty+moa.ReplenishQty) IsnQty,case when i.cSRPolicy =N'PE' then '' else isnull(moa.sodid,'') end  sodid,\r\n        mom.partid as parentpartid,bas.partid  as leafpartid    \r\n        ,case when i.cSRPolicy =N'PE' then 0  else isnull(moa.sotype,'') end as  sotype,bomid,AllocateId as ID,'生产订单' as Voucher    \r\nfrom mom_orderdetail mom    \r\ninner join mom_moallocate moa on mom.modid=moa.modid \r\ninner join inventory i on moa.invcode = i.cinvcode    \r\ninner join bas_part bas on   moa.invcode=bas.invcode \r\n    \r\n and case when bas.free1='' then bas.free1 else moa.free1 end =bas.free1    \r\n and case when bas.free2='' then bas.free2 else moa.free2 end =bas.free2    \r\n and case when bas.free3='' then bas.free3 else moa.free3 end =bas.free3    \r\n and case when bas.free4='' then bas.free4 else moa.free4 end =bas.free4    \r\n and case when bas.free5='' then bas.free5 else moa.free5 end =bas.free5    \r\n and case when bas.free6='' then bas.free6 else moa.free6 end =bas.free6    \r\n and case when bas.free7='' then bas.free7 else moa.free7 end =bas.free7    \r\n and case when bas.free8='' then bas.free8 else moa.free8 end =bas.free8    \r\n and case when bas.free9='' then bas.free9 else moa.free9 end =bas.free9    \r\n and case when bas.free10='' then bas.free10 else moa.free10 end =bas.free10    \r\nwhere  isnull(mom.status,0) =3 --and moa.sotype>0  and  \r\n    \r\nunion    \r\n    \r\nselect (mat.iquantity-isnull(mat.isendqty,0)+isnull(mat.iComplementQty,0)) IsnQty,\r\n        case when i.cSRPolicy =N'PE' then '' else isnull(mat.sodid,'') end as sodid,bas.partid as parentpartid,b.partid as leafpartid    \r\n        ,case when i.cSRPolicy =N'PE' then 0 else isnull(mat.sotype,'') end as  sotype,bomid,MOMaterialsID as ID,'委外订单' as Voucher    \r\nfrom om_modetails om    \r\ninner join bas_part bas on om.cinvcode=bas.invcode and case when bas.free1='' then bas.free1 else om.cfree1 end =bas.free1    \r\n and case when bas.free2='' then bas.free2 else om.cfree2 end =bas.free2    \r\n and case when bas.free3='' then bas.free3 else om.cfree3 end =bas.free3    \r\n and case when bas.free4='' then bas.free4 else om.cfree4 end =bas.free4    \r\n and case when bas.free5='' then bas.free5 else om.cfree5 end =bas.free5    \r\n and case when bas.free6='' then bas.free6 else om.cfree6 end =bas.free6    \r\n and case when bas.free7='' then bas.free7 else om.cfree7 end =bas.free7    \r\n and case when bas.free8='' then bas.free8 else om.cfree8 end =bas.free8    \r\n and case when bas.free9='' then bas.free9 else om.cfree9 end =bas.free9    \r\n and case when bas.free10='' then bas.free10 else om.cfree10 end =bas.free10    \r\ninner join OM_MOMaterials mat on om.MoDetailsID=mat.MoDetailsID     \r\ninner join om_momain mom on mom.moid=om.moid \r\ninner join inventory i on  mat.cinvcode = i.cinvcode   \r\ninner join bas_part b on   mat.cinvcode=b.invcode     \r\n and case when b.free1='' then b.free1 else mat.cfree1 end =b.free1    \r\n and case when b.free2='' then b.free2 else mat.cfree2 end =b.free2    \r\n and case when b.free3='' then b.free3 else mat.cfree3 end =b.free3    \r\n and case when b.free4='' then b.free4 else mat.cfree4 end =b.free4    \r\n and case when b.free5='' then b.free5 else mat.cfree5 end =b.free5    \r\n and case when b.free6='' then b.free6 else mat.cfree6 end =b.free6    \r\n and case when b.free7='' then b.free7 else mat.cfree7 end =b.free7    \r\n and case when b.free8='' then b.free8 else mat.cfree8 end =b.free8    \r\n and case when b.free9='' then b.free9 else mat.cfree9 end =b.free9    \r\n and case when b.free10='' then b.free10 else mat.cfree10 end =b.free10    \r\nwhere  ((isnull(mom.cverifier,'')<>'' and isnull(mom.cchanger,'')='') or isnull(mom.cchangeverifier,'')<>'')   \r\n  and isnull(om.cbcloser,'')='' --and  mat.sotype>0\r\n  \r\n ) a    \r\ngroup by sodid,leafpartid,sotype,bomid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"leafIsnQty"},{"field":"Type","value":"View"}],"columns":[{"id":"column-247178","object_id":"column-247178","name":"isnQty","name_without_path":"isnQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247179","object_id":"column-247179","name":"sodid","name_without_path":"sodid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247180","object_id":"column-247180","name":"leafpartid","name_without_path":"leafpartid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247181","object_id":"column-247181","name":"sotype","name_without_path":"sotype","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247182","object_id":"column-247182","name":"bomid","name_without_path":"bomid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};