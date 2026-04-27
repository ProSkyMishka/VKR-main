import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip016-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 14)
                .padding(.vertical, 6)
                .frame(width: 96, height: 46)
                .background(Color.purple)
                .cornerRadius(23)
                .shadow(radius: 2)
        }
        .padding()
    }
}
