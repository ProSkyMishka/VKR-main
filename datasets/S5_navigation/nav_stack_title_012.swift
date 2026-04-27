import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst012-home")
                NavigationLink("nst012-go") { Text("nst012-next") }
            }
            .navigationTitle("nst012-stackTitle")
        }
    }
}
