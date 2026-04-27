import SwiftUI

struct Dnld002: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld002-detail: " + title).font(.title2)
            Text("nld002-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld002-one", "nld002-two", "nld002-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld002(title: it) }
            }
            .navigationTitle("nld002-rows")
        }
    }
}
