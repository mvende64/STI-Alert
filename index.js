def pastsexpartner():
    form = PastSexualPartnerForm()
    if form.validate_on_submit():
        pastpartner = pastsexpartner(email=form.email.data,
                            username=form.username.data,
                            first_name=form.first_name.data,
                            last_name=form.last_name.data,
                            phonenumber=form.phonenumber.data)

        # add employee to the database
        db.session.add(pastpartner)
        db.session.commit()
        flash('You have successfully filled in parnter! You may now add another partner.')

        # redirect to the login page
        return redirect(url_for('auth.login'))

    # load pastsexpartner template
    return render_template('auth/pastsexpartner.html', form=form, title='pastsexpartner')
