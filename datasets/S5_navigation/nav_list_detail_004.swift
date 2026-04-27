import SwiftUI

struct Dnld004: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld004-detail: " + title).font(.title2)
            Text("nld004-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld004-one", "nld004-two", "nld004-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld004(title: it) }
            }
            .navigationTitle("nld004-rows")
        }
    }
}
