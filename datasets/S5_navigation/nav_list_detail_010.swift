import SwiftUI

struct Dnld010: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld010-detail: " + title).font(.title2)
            Text("nld010-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld010-one", "nld010-two", "nld010-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld010(title: it) }
            }
            .navigationTitle("nld010-rows")
        }
    }
}
