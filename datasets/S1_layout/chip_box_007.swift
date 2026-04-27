import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip007-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 17)
                .padding(.vertical, 13)
                .frame(width: 87, height: 37)
                .background(Color.purple)
                .cornerRadius(18)
                .shadow(radius: 2)
        }
        .padding()
    }
}
