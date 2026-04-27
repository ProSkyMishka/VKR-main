import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf012-header"), footer: Text("hf012-footer")) {
                Text("hf012-i1")
                Text("hf012-i2")
                Text("hf012-i3")
            }
        }
    }
}
