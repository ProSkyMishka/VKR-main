import SwiftUI

struct Dnld008: View {
    let title: String
    var body: some View {
        VStack {
            Text("nld008-detail: " + title).font(.title2)
            Text("nld008-extra")
        }
    }
}

struct ContentView: View {
    let items = ["nld008-one", "nld008-two", "nld008-three"]
    var body: some View {
        NavigationView {
            List(items, id: \.self) { it in
                NavigationLink(it) { Dnld008(title: it) }
            }
            .navigationTitle("nld008-rows")
        }
    }
}
