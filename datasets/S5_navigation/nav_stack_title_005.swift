import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst005-home")
                NavigationLink("nst005-go") { Text("nst005-next") }
            }
            .navigationTitle("nst005-stackTitle")
        }
    }
}
