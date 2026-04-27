import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf006-header"), footer: Text("hf006-footer")) {
                Text("hf006-i1")
                Text("hf006-i2")
                Text("hf006-i3")
            }
        }
    }
}
