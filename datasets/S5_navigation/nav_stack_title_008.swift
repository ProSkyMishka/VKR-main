import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack {
                Text("nst008-home")
                NavigationLink("nst008-go") { Text("nst008-next") }
            }
            .navigationTitle("nst008-stackTitle")
        }
    }
}
