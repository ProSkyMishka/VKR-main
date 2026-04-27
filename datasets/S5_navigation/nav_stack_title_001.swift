import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst001-home")
                NavigationLink("nst001-go") { Text("nst001-next") }
            }
            .navigationTitle("nst001-stackTitle")
        }
    }
}
